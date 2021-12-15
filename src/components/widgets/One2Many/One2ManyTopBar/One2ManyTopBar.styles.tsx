import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  height: 2rem;
  display: flex;
  flex-grow: 1;
  background-color: rgb(63, 63, 70);
  color: rgba(228, 228, 231);
`;
const TitleWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleSpan = styled.span`
  padding-left: 0.5rem;
  font-weight: 700;
`;

export const Title = ({ title }: { title: string }) => {
  return (
    <TitleContainer>
      <TitleWrapper>
        <TitleSpan>{title}</TitleSpan>
      </TitleWrapper>
    </TitleContainer>
  );
};

export const Separator = styled.div`
  display: inline-block;
  width: 0.75rem;
`;

export const Container = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

export const Wrapper = styled.div`
  height: 2rem;
  flex: none;
  padding-left: 0.5rem;
`;
