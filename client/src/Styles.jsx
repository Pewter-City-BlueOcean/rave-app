import styled from 'styled-components';

const H1 = styled.h1`
  font-family: KoHo;
  font-style: italic;
  font-size: 100px;
  color: #eeeee4;
  text-shadow: #000000 1px 0 14px;
  margin-bottom: 0;
`
const H2 = styled.h2`
  font-size: 20px;
  font-family: KoHo;
  color: #eeeee4;
  text-shadow: #000000 1px 0 14px;
`
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`

const frostyStyle = {
  overlay:{
    position: 'fixed',
    inset: '0px',
    backgroundColor: 'rgba(234,236,233,0.4)',
},
  content:{
    backgroundColor:'rgba(234,236,233,0.1)',
    backdropFilter: 'blur(7px)',
    boxShadow: '0 6px 35px rgba(0,0,0,0.65)',
    borderRadius: '25px',
    borderColor: 'rgba(255, 255, 255,0.8)',
  }
};

export {
H1,
H2,

  frostyStyle
}