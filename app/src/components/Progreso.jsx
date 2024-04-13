import ProgressBar from 'react-bootstrap/ProgressBar';

function WithLabelExample() {
  const now = 10;
  return <ProgressBar now={now} label={`${now}%`} />;
}

export default WithLabelExample;