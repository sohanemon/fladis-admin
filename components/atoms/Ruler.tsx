export function Ruler({ style }: { style?: Object }) {
  return (
    <hr
      style={{
        borderTop: '0.1px #EBEBEB solid',
        ...style,
      }}
    />
  );
}
