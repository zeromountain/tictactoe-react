import styled from '@emotion/styled';

type ButtonProps = {
  color?: string;
  background?: string;
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  cursor?: string;
};

export const Button = styled.button((props: ButtonProps) => ({
  color: props.color || 'inherit',
  background: props.background || 'transparent',
  border: props.border || 'none',
  borderRadius: props.borderRadius || '0',
  boxShadow: props.boxShadow || 'none',
  padding: props.padding || '0',
  margin: props.margin || '0',
  width: props.width || 'auto',
  height: props.height || 'auto',
  fontSize: props.fontSize || 'inherit',
  fontWeight: props.fontWeight || 'inherit',
  lineHeight: props.lineHeight || 'inherit',
  cursor: props.cursor || 'pointer',
}));
