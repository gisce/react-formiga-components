import { fileTypeFromBuffer } from "file-type-buffer-browser";

export function getFilesize(base64string: string) {
  const buffer = Buffer.from(base64string, "base64");
  const inKbs = buffer.length / 1e3;
  return `${Math.round((inKbs + Number.EPSILON) * 100) / 100} KB`;
}

export async function getMimeType(base64string: string) {
  const mimeInfo = await fileTypeFromBuffer(
    Buffer.from(base64string, "base64")
  );

  if (!mimeInfo) {
    return {
      mime: "text/plain",
      ext: "txt",
    };
  }

  return mimeInfo;
}

export const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => resolve(e.target.result.split(",")[1]);
    reader.onerror = (error) => reject(error);
  });

export function openBase64InNewTab(data: string, mimeType: string) {
  var byteCharacters = atob(data);
  var byteNumbers = new Array(byteCharacters.length);
  for (var i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  var byteArray = new Uint8Array(byteNumbers);
  var file = new Blob([byteArray], { type: mimeType + ";base64" });
  var fileURL = URL.createObjectURL(file);
  window.open(fileURL);
}

export async function downloadFile(value: string, filename?: string) {
  const fileType = await getMimeType(value!);
  const linkSource = `data:${fileType?.mime};base64,${value}`;
  const downloadLink = document.createElement("a");

  downloadLink.href = linkSource;
  downloadLink.download = `download.${fileType?.ext}`;
  downloadLink.click();
}
