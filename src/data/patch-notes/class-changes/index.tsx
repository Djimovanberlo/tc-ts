import druid from './classes/druid'
import hunter from './classes/hunter'
import hunterPets from './classes/hunter-pets'
import mage from './classes/mage'
import paladin from './classes/paladin'
import priest from './classes/priest'
import rogue from './classes/rogue'
import shaman from './classes/shaman'
import warlock from './classes/warlock'
// import warlockDemons from './classes/warlock-demons'
import warrior from './classes/warrior'

export default {
  title: 'Class changes',
  note: (
    <>
      Note TBD. I took some inspiration from{' '}
      <a href='https://turtle-wow.org/#/home' target='_blank'>
        turtlewow
      </a>{' '}
      for a number of class changes.
    </>
  ),
  content: [druid, hunter, hunterPets, mage, paladin, priest, rogue, shaman, warlock, warrior],
}