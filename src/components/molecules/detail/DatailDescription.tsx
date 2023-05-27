import React from 'react';
import styled from 'styled-components';
import { Span } from '@atoms';

interface DatailDescription {
  title: string;
  description: string;
  description2?: string;
}

const Text = styled.p<{ weight?: string }>`
  color: #767676;
  font-size: 0.875rem;
  font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
  margin-bottom: 0.5rem;
`;

export function DatailDescription({ title, description, description2 }: DatailDescription) {
  return (
    <>
      <Span size={1.25 * 0.9} weight="bold">
        {title}
      </Span>
      <div>
        {description2 ? (
          <>
            <Text weight="bold">제목 키워드</Text>
            {description.split('\n').map((line, index) => {
              return (
                // eslint-disable-next-line
                <Text key={index}>
                  {' '}
                  {line}
                  {
                    // eslint-disable-next-line
                    <br></br>
                  }
                </Text>
              );
            })}
            <br />
            <br />
            <Text weight="bold">본문 키워드</Text>
            {description2.split('\n').map((line, index) => {
              return (
                // eslint-disable-next-line
                <Text key={index}>
                  {' '}
                  {line}
                  {
                    // eslint-disable-next-line
                    <br></br>
                  }
                </Text>
              );
            })}
          </>
        ) : (
          description.split('\n').map((line, index) => {
            return (
              // eslint-disable-next-line
              <Text key={index}>
                {' '}
                {line}
                {
                  // eslint-disable-next-line
                  <br></br>
                }
              </Text>
            );
          })
        )}
        <br />
      </div>
    </>
  );
}
