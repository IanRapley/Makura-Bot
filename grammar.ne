main    -> (Title "\n" ADJNOUN "\n" ADJNOUN "\n" ADJNOUN)
Title -> TitleDescriptor " Things"|"Things That Are " TitleDescriptor

TitleDescriptor -> "Shameful" |"Delightful" |"Pitiable" |"Disappointing" |"Timely" |"Wanton" |"Woeful" |"Amusing" |"Touching" |"Memorable" |"Charming" |"Shocking"

ADJNOUN -> "A" ITEM|CONTACT TIMING:?
ITEM -> POSSESSION:? PEOPLE|COLOUR:? OBJECT|LITERATURE|ANIMAL|BIRD|SEASON:? WEATHER|COLOUR:? TEXTURE:? CLOTHING|INSTRUMENT

SONIC	-> LITERATURE " read by a" PEOPLE|INSTRUMENT " played by a" PEOPLE
VITEM	-> POSSESSION:? PEOPLE|COLOUR:? OBJECT|ANIMAL|BIRD|SEASON:? WEATHER|COLOUR:? TEXTURE:? CLOTHING|INSTRUMENT
CONTACT -> "The glimpse of a" VITEM| "The sight of a" VITEM|"The sound of a" SONIC|	"The rustle of a" COLOUR:? TEXTURE:? CLOTHING|BIRDSONG BIRD
TIMING  -> " in the" SEASON WEATHER:?
BIRDSONG -> "The call of a"|"The song of a"| "A singing"


# Adjectives
COLOUR  -> " red"|" yellow "|" purple"|" grey"|" green"|" red"|" blue"|" shaded"|" flowered"|" white"|" patterned"|" silver"| " gold"| " bronze"
SEASON	-> " morning"|" dusk"|" spring"|" summer"|" winter"|" dawn"
TEXTURE	-> " Chinese"|" Korean"|" northern"|" small"|" silk"
SEASON	   -> " morning"|" spring"|" summer"|" winter"|" dawn"


# Core Items
POSSESSION -> PEOPLE "'s" 
PEOPLE     -> " lover"|" servant"|" girl"|" boy"|" empress"|" sister"|" lover"|" friend"|" peasant"|" priest"
OBJECT     -> " box"|" envelope"|" incense"|" flower"|" vase"|" cup"|" fan"|" scroll"|" plate"|" rake"
LITERATURE -> " letter"|" poem"|" sutra"|" tanka"
INSTRUMENT -> " koto"|" shaminsen"|" flute"
ANIMAL     -> " goose"|" ox"|" crane"|" carp"|" turtle"|" cat"|" dog"|" crow"|" salmon"|" monkey"|" bear"|" boar"|" nightingale"|" egret"
BIRD -> 	  " goose"|" crane"|" crow"|" nightingale"|" egret"
WEATHER    -> " snow"|" rain"|" night"|" sun"|" shade"|" cloud"
CLOTHING   -> " robe"|" sleeve"|" gown"|" hat"|" veil"|" shawl"|" slipper"|" sandal"