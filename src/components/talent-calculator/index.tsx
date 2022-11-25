import React, { useState } from 'react'

import SelectWrapper from './talent-calculator-select'
import TalentCalculatorMain from './talent-calculator-main/'
import styles from './index.module.css'
import ChangedSelect from './changed-select'
import classTalents from '../../data/talents'

const TalentCalculator: React.FC = () => {
  const classes = ['druid', 'hunter', 'mage', 'paladin', 'priest', 'rogue', 'shaman', 'warlock', 'warrior']
  const [selectedClass, setSelectedClass] = useState<string>(classes[0])
  // const [classData, setClassData] = useState<any>(classTalents.find(thing => thing.class === selectedClass))
  // const classData = require(`../../../data/talents/${selectedClass}`)

  const selectClass = (i: number) => {
    const newClassData = classTalents.find(thing => thing.class === selectedClass)
    // setClassData(newClassData)
    setSelectedClass(classes[i])
  }

  const [displayIsNew, setIsNew] = useState<boolean>(true)
  const [displayIsChanged, setIsChanged] = useState<boolean>(true)
  const [displayIsMoved, setIsMoved] = useState<boolean>(true)

  const toggleIsNew = () => setIsNew(!displayIsNew)
  const toggleIsChanged = () => setIsChanged(!displayIsChanged)
  const toggleIsMoved = () => setIsMoved(!displayIsMoved)

  const displayChanged = {
    displayIsNew,
    displayIsChanged,
    displayIsMoved,
  }

  const toggleChangedObj = {
    toggleIsChanged,
    toggleIsNew,
    toggleIsMoved,
  }

  return (
    <div className={styles.tcWrapper}>
      <SelectWrapper classes={classes} selectClass={selectClass} selectedClass={selectedClass} />
      <ChangedSelect toggleChangedObj={toggleChangedObj} displayChanged={displayChanged} />
      <TalentCalculatorMain displayChanged={displayChanged} selectedClass={selectedClass} />
    </div>
  )
}

export default TalentCalculator
