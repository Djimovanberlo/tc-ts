import { Stats } from '../../types'

export class Item {
  name: string
  img: string
  quality: 'epic' | 'rare'
  slot: string
  itemType: string
  damage: string | null
  speed: string | null
  dps: string | null
  stats: Stats | null
  description: string | null
  constructor(
    name: string,
    img: string,
    quality: 'epic' | 'rare',
    slot: string,
    itemType: string,
    damage?: string | null,
    speed?: string | null,
    dps?: string | null,
    stats?: Stats | null,
    description?: string | null
  ) {
    this.name = name
    this.img = img
    this.quality = quality
    this.slot = slot
    this.itemType = itemType
    this.damage = damage ? damage : null
    this.speed = speed ? speed : null
    this.dps = dps ? dps : null
    this.stats = stats ? stats : null
    this.description = description ? description : null
  }
}
