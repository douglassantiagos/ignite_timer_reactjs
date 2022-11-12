import { differenceInSeconds } from 'date-fns';
import { useContext, useEffect } from 'react';
import { CyclesContext } from '../../../../contexts/CyclesContext';
import { CountdownContainer, Separator } from './styled'

export function Countdown() {
  const { 
    activeCycle, 
    activeCycleId, 
    amountSecondsPassed, 
    markCurrentCycleAsFinished, 
    setSecondsPassed 
  } = useContext(CyclesContext);  

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(), 
          new Date(activeCycle.startDate),
        );

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId, markCurrentCycleAsFinished])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const convertMinutes = String(minutesAmount).padStart(2, '0');
  const convertSeconds = String(secondsAmount).padStart(2, '0');

  useEffect(() => {
    if (activeCycle) {
      document.title = `${convertMinutes}:${convertSeconds}`
    }
  }, [convertMinutes, convertSeconds, activeCycle])

  return (
    <CountdownContainer>
      <span>{convertMinutes[0]}</span>
      <span>{convertMinutes[1]}</span>
      <Separator>:</Separator>
      <span>{convertSeconds[0]}</span>
      <span>{convertSeconds[1]}</span>
    </CountdownContainer>
  )
}
