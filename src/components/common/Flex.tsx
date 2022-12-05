import styled from '@emotion/styled';

type FlexProps = {
  flex?: string;
  direction?: 'row' | 'column';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  grow?: number;
  shrink?: number;
  basis?: string;
  order?: number;
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch';
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  background?: string;
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
  gap?: string;
};

export const Flex = styled.div((props: FlexProps) => ({
  display: 'flex',
  flex: props.flex || '0 1 auto',
  flexDirection: props.direction || 'row',
  justifyContent: props.justify || 'flex-start',
  alignItems: props.align || 'stretch',
  flexWrap: props.wrap || 'nowrap',
  flexGrow: props.grow || 0,
  flexShrink: props.shrink || 1,
  flexBasis: props.basis || 'auto',
  order: props.order || 0,
  alignSelf: props.alignSelf || 'auto',
  width: props.width || 'auto',
  height: props.height || 'auto',
  margin: props.margin || '0',
  padding: props.padding || '0',
  background: props.background || 'transparent',
  border: props.border || 'none',
  borderRadius: props.borderRadius || '0',
  boxShadow: props.boxShadow || 'none',
  gap: props.gap || '0',
}));
