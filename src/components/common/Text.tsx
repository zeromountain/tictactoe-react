import styled from '@emotion/styled';

type SpanProps = {
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
};

export const Text = styled.span((props: SpanProps) => ({
  color: props.color || 'inherit',
  width: props.width || 'auto',
  height: props.height || 'auto',
  fontSize: props.fontSize || 'inherit',
  fontWeight: props.fontWeight || 'inherit',
  lineHeight: props.lineHeight || 'inherit',
}));
