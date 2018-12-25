main    -> (ADJNOUN "\n" ADJNOUN "\n" ADJNOUN)
ADJNOUN -> "A" ITEM|CONTACT TIMING:?
ITEM -> POSSESSION:? PEOPLE|COLOUR:? OBJECT|LITERATURE|ANIMAL|BIRD|SEASON:? WEATHER|COLOUR:? TEXTURE:? CLOTHING|INSTRUMENT

SONIC	-> LITERATURE " read by a" PEOPLE|BIRDSONG BIRD|CLOTHINGSOUND COLOUR:? TEXTURE:? CLOTHING|INSTRUMENT " played by a" PEOPLE
VITEM	-> POSSESSION:? PEOPLE|COLOUR:? OBJECT|ANIMAL|BIRD|SEASON:? WEATHER|COLOUR:? TEXTURE:? CLOTHING|INSTRUMENT
CONTACT -> "A Glimpse of a" VITEM| "The sight of a" VITEM|"The sound of a" SONIC
TIMING  -> " in the" SEASON WEATHER:?
BIRDSONG -> " the call of a"|" the song of a"| " a singing"
CLOTHINGSOUND -> " a rustling"|"a swishing"

# Adjectives
COLOUR  -> " Red"|" Yellow "|" Purple"|" Grey"|" Dusky" COLOUR|" Green"|" Red"|" Blue"|" Shaded"|" Flowered"|" White"|" Patterned"|" Silver"| " Gold"| " Bronze"			  | " Brass"
SEASON	-> " Morning"|" Dusk"|" Spring"|" Summer"|" Winter"|" Dawn"
TEXTURE	-> " Chinese"|" Korean"|" Northern"|" Small"|" Silk"|" Damask"
SEASON	   -> " Morning"|" Dusk"|" Spring"|" Summer"|" Winter"|" Dawn"


# Core Items
POSSESSION -> PEOPLE "'s" 
PEOPLE     -> " Lover"|" Servant"|" Girl"|" Boy"|" Empress"|" Sister"|" Lover"|" Friend"|" Peasant"|" Priest"
OBJECT     -> " Box"|" Envelope"|" Incense"|" Flower"|" Vase"|" Cup"|" fan"|" scroll"|" plate"|" rake"
LITERATURE -> " Letter"|" Poem"|" Sutra"|" Tanka"
INSTRUMENT -> " Koto"|" Shaminsen"|" Flute"
ANIMAL     -> " Goose"|" Ox"|" Birds"|" Crane"|" Carp"|" Turtle"|" Cat"|" Dog"|" Crow"|" Salmon"|" Monkey"|" Bear"|" Boar"|" Nightingale"|" Egret"
BIRD -> " Goose"|" Ox"|" Birds"|" Crane"|" Carp"|" Turtle"|" Cat"|" Dog"|" Crow"|" Salmon"|" Monkey"|" Bear"|" Boar"|" Nightingale"|" Egret"
WEATHER    -> " Snow"|" Rain"|" Night"|" Sun"|" Shade"|" Cloud"
CLOTHING   -> " Robe"|" Sleeve"|" Gown"|" Hat"|" Cowl"|" Veil"|" Shawl"|" Slipper"|" Sandal"