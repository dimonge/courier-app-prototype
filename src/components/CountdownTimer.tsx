import CircularProgress from 'react-native-circular-progress-indicator';

const CountdownTimer = (props: any) => {
  return (
    <CircularProgress
      {...props}
      />
  )
}

CountdownTimer.defaultProps = {
  value: 0,
  radius: 120,
  maxValue: 10,
  initialValue: 10,
  progressValueColor: '#fff',
  activeStrokeWidth: 15,
  inActiveStrokeWidth: 15,
  duration: 10000,
  onAnimationComplete: () => alert('time out')
}

CountdownTimer.title = 'CountdownTimer'

export default CountdownTimer
