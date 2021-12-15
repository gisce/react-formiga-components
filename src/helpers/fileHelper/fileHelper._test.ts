// TODO: This test fails randomly with jest. The reason is unknown.
import { getFilesize, getMimeType } from "helpers/fileHelper";
import { fileTypeFromBuffer } from "file-type-buffer-browser";

let mFileTypeFromBuffer = {};

jest.mock(
  "file-type-buffer-browser",
  () => {
    return {
      fileTypeFromBuffer: jest.fn(async () => mFileTypeFromBuffer),
    };
  },
  { virtual: true }
);

const base64File =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4wIgogICB4PSIwLjAwMDAwMDAiCiAgIHk9IjAuMDAwMDAwMCIKICAgd2lkdGg9IjM3NS4wMDAwMCIKICAgaGVpZ2h0PSIzNzUuMDAwMDAiCiAgIGlkPSJzdmc1NTkiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM1NjEiPgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBpZD0ibGluZWFyR3JhZGllbnQxNjUxIj4KICAgICAgPHN0b3AKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMDtzdG9wLW9wYWNpdHk6MS4wMDAwMDAwIgogICAgICAgICBvZmZzZXQ9IjAuMDAwMDAwMCIKICAgICAgICAgaWQ9InN0b3AxNjUyIiAvPgogICAgICA8c3RvcAogICAgICAgICBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZmZmO3N0b3Atb3BhY2l0eToxLjAwMDAwMDAiCiAgICAgICAgIG9mZnNldD0iMS4wMDAwMDAwIgogICAgICAgICBpZD0ic3RvcDE2NTMiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cGF0aAogICAgIGQ9Ik0gMTgzLjkyNDYxLDIzNS4wMDAwMCBDIDE4My45MjQ2MSwyMjQuNjQ0NjYgMTc2LjE5MDQyLDIxNi4yNTAwMCAxNjYuNjQ5ODAsMjE2LjI1MDAwIEMgMTU3LjEwOTE5LDIxNi4yNTAwMCAxNDkuMzc1MDAsMjI0LjY0NDY2IDE0OS4zNzUwMCwyMzUuMDAwMDAgQyAxNDkuMzc1MDAsMjQ1LjM1NTM0IDE1Ny4xMDkxOSwyNTMuNzUwMDAgMTY2LjY0OTgwLDI1My43NTAwMCBDIDE3Ni4xOTA0MiwyNTMuNzUwMDAgMTgzLjkyNDYxLDI0NS4zNTUzNCAxODMuOTI0NjEsMjM1LjAwMDAwIEwgMTgzLjkyNDYxLDIzNS4wMDAwMCB6ICIKICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjc1MDAwMDAwO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjAwMDAwMDBwdDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxLjAwMDAwMDAiCiAgICAgaWQ9InBhdGgxNjQ5IiAvPgogIDxwYXRoCiAgICAgZD0iTSAyNTYuMDI0ODEsMjM1LjAwMDAwIEMgMjU2LjAyNDgxLDIyNC42NDQ2NiAyNDguMjkwNjIsMjE2LjI1MDAwIDIzOC43NTAwMCwyMTYuMjUwMDAgQyAyMjkuMjA5MzksMjE2LjI1MDAwIDIyMS40NzUyMCwyMjQuNjQ0NjYgMjIxLjQ3NTIwLDIzNS4wMDAwMCBDIDIyMS40NzUyMCwyNDUuMzU1MzQgMjI5LjIwOTM5LDI1My43NTAwMCAyMzguNzUwMDAsMjUzLjc1MDAwIEMgMjQ4LjI5MDYyLDI1My43NTAwMCAyNTYuMDI0ODEsMjQ1LjM1NTM0IDI1Ni4wMjQ4MSwyMzUuMDAwMDAgTCAyNTYuMDI0ODEsMjM1LjAwMDAwIHogIgogICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuNzUwMDAwMDA7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMDAwMDAwMHB0O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEuMDAwMDAwMCIKICAgICBpZD0icGF0aDE2NTkiIC8+CiAgPHBhdGgKICAgICBkPSJNIDExMi42NjY2Niw5OC4yNjE4OTIgTCAzMDAuODE2NTcsOTguMjYxODkyIEwgMzM4LjMxNjU3LDI4MS4yMTI1MCBMIDM4LjMxNjU4OSwyODEuMjEyNTAgQyAzOC4zMTY1ODksMjgxLjIxMjUwIDk0LjU2NjU4NSwxODcuNDYyNTAgMTUwLjgxNjU3LDE4Ny40NjI1MCBDIDIwNy4wNjY1NywxODcuNDYyNTAgMzE3LjA2NjU3LDE4Ny40NjI1MCAzMTcuMDY2NTcsMTg3LjQ2MjUwIgogICAgIHN0eWxlPSJmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjAuNzUwMDAwMDA7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEyLjUwMDAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NC4wMDAwMDAwO3N0cm9rZS1vcGFjaXR5OjEuMDAwMDAwMCIKICAgICBpZD0icGF0aDE4NDIiIC8+Cjwvc3ZnPgo=";
const base64text = "dGVzdHh0";

describe("a fileHelper", () => {
  describe("on getFilesize method", () => {
    it("should return the file size of a file", () => {
      expect(getFilesize(base64File)).toBe("2.16 KB");
    });
    it("should return zero when file is blank", () => {
      expect(getFilesize("")).toBe("0 KB");
    });
  });
  describe("on getMimeType method", () => {
    it("should return mime type when file is an svg", async () => {
      mFileTypeFromBuffer = {
        mime: "svg+xml",
        ext: "svg",
      };
      const output = Buffer.from(base64File, "base64");
      const mimeTypeInfo = await getMimeType(base64File);

      expect(fileTypeFromBuffer).toBeCalledTimes(1);
      expect(fileTypeFromBuffer).toBeCalledWith(output);

      expect(mimeTypeInfo.mime).toBe("svg+xml");
      expect(mimeTypeInfo.ext).toBe("svg");
    });
    it("should return mime type text/plain when file is a txt", async () => {
      mFileTypeFromBuffer = undefined;
      const output = Buffer.from(base64text, "base64");
      const mimeTypeInfo = await getMimeType(base64text);

      expect(fileTypeFromBuffer).toBeCalledTimes(2);
      expect(fileTypeFromBuffer).toHaveBeenLastCalledWith(output);

      expect(mimeTypeInfo.mime).toBe("text/plain");
      expect(mimeTypeInfo.ext).toBe("txt");
    });
  });
});
