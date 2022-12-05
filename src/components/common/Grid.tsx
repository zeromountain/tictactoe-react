import styled from '@emotion/styled';

type GridProps = {
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridTemplateAreas?: string;
  gridAutoColumns?: string;
  gridAutoRows?: string;
  gridAutoFlow?: string;
  gridGap?: string;
  gridColumnGap?: string;
  gridRowGap?: string;
  gridColumn?: string;
  gridRow?: string;
  gridArea?: string;
  justifyItems?: string;
  alignItems?: string;
  placeItems?: string;
  justifyContent?: string;
  alignContent?: string;
  placeContent?: string;
  background?: string;
  width?: string;
  height?: string;
};

export const Grid = styled.div((props: GridProps) => ({
  display: 'grid',
  gridTemplateColumns: props.gridTemplateColumns || 'none',
  gridTemplateRows: props.gridTemplateRows || 'none',
  gridTemplateAreas: props.gridTemplateAreas || 'none',
  gridAutoColumns: props.gridAutoColumns || 'auto',
  gridAutoRows: props.gridAutoRows || 'auto',
  gridAutoFlow: props.gridAutoFlow || 'row',
  gridGap: props.gridGap || '0',
  gridColumnGap: props.gridColumnGap || 'normal',
  gridRowGap: props.gridRowGap || 'normal',
  gridColumn: props.gridColumn || 'auto',
  gridRow: props.gridRow || 'auto',
  gridArea: props.gridArea || 'auto',
  justifyItems: props.justifyItems || 'auto',
  alignItems: props.alignItems || 'auto',
  placeItems: props.placeItems || 'auto',
  justifyContent: props.justifyContent || 'normal',
  alignContent: props.alignContent || 'normal',
  placeContent: props.placeContent || 'normal',
  backgroundColor: props.background || 'transparent',
  width: props.width || 'auto',
  height: props.height || 'auto',
}));
