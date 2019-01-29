main    -> (StructureOne|StructureTwo)
StructureOne -> Title "\n\n" ADJNOUN "\n" ADJNOUN "\n" ADJNOUN "\n#JAPAN"
StructureTwo -> "A" SimpleItem " should be" TypeTwo "\n\nSo should " ADJNOUNa "\n" ADJNOUNb "\n" ADJNOUNb " \n#JAPAN"
Title -> TitleDescriptor " Things"|"Things That Are " TitleDescriptor
TitleDescriptor -> "Shameful" |"Delightful" |"Pitiable" |"Disappointing" |"Timely" |"Wanton" |"Woeful" |"Amusing" |"Touching" |"Memorable" |"Charming" |"Shocking"|"Poetic"|"Common"|"Rare"|"Incomparable"|"Unsuitable"|"Adorable"
TypeTwo -> " old" |" new" |" large" |" dark" |" light" |" small"|" plump"|" rare"


ADJNOUN -> "A" ITEM|CONTACT TIMING:?|"A" ITEM|CONTACT TIMING:?|"A" ITEM|CONTACT TIMING:?| TIMEWHEN 
ADJNOUNa -> "a" ITEM
ADJNOUNb -> "A" ITEM|CONTACT TIMING:?|"A" ITEM|CONTACT TIMING:?|"A" ITEM|CONTACT TIMING:?
ITEM -> POSSESSION:? PEOPLE|COLOUR:? OBJECT|LITERATURE|ANIMAL|BIRD
SimpleItem -> PEOPLE|COLOUR:? OBJECT|ANIMAL|BIRD
WEATHER|COLOUR:? TEXTURE:? CLOTHING|INSTRUMENT
SONIC	-> LITERATURE " read by a" PEOPLE|INSTRUMENT " played by a" PEOPLE
VITEM	-> POSSESSION:? PEOPLE|COLOUR:? OBJECT|ANIMAL TIMING:?|BIRD TIMING:?|COLOUR:? TEXTURE:? CLOTHING|INSTRUMENT
PEOPLEADJ -> " old"|" young"|" good looking"|" ugly"|" tall"|" kind"
CONTACT -> "The glimpse of a" VITEM| "The sight of a" VITEM|"The sound of a" SONIC|				   "The rustle of a" COLOUR:? TEXTURE:? CLOTHING|BIRDSONG BIRD
TIMING  -> " in the" SEASON WEATHER:?|" in the" DATE
BIRDSONG -> "The call of a"|"The song of a"| "A singing"
TIMEANDWEATHER -> SEASON TIMEODAY:?|SEASON WEATHER|TIMEODAY WEATHER:?|WEATHER
TIMEWHEN -> TIME " when" SETTINGIN " and" EVENTSIN|TIME " when" SETTINGOUT " and" EVENTSOUT

#Once when structure
TIME -> "Once"|"One day"|"One time"|"One day"|"Back"|"In the" DATE
SETTINGIN -> " the Empress was in mourning"|" I was new to the palace"|" it was the" FESTIVAL " festival"|" my" RELATIVE " was visiting"|" we were compsing poems"|" we were choosing incense"|RELATIVE " was just leaving"
SETTINGOUT -> " I was travelling"|" I was in " PLACEOUT
FESTIVAL -> " Tanabata"|" Mibune"|" Obon"|" New year's"|" flower"
EVENTSIN -> " I saw" PALACEEVENT
EVENTSOUT -> " I saw" DISTANTEVENT
PALACEEVENT -> " a cat in" LOCATIONIN|" snow falling in" LOCATIONIN|" a servant sweeping" LOCATIONIN|" mist in the hills"|" a monk burning incense"|" cranes flying over" LOCATIONIN
DISTANTEVENT -> " snow falling in" LOCATIONOUT|" mist in the" LOCATIONOUT|" cranes flying over" LOCATIONOUT
LOCATIONIN -> " the palace gardens"|" a back corridor"|" a temple in the west"|" the palace"|" the Empress's quarters"|" the guardhouse by the front gate"|" the moon rising over" LOCATIONIN
LOCATIONOUT -> " the hills"|" the valley"|" the village"|" the roadway"|" the forest"
PLACEOUT -> " Oji"|" Hyuga"|" Nara"|" Ise"

# Adjectives
COLOUR  -> " red"|" yellow "|" purple"|" grey"|" green"|" red"|" blue"|" shaded"|" flowered"|" white"|" patterned"|" silver"| " gold"| " bronze"
SEASON	-> " spring"|" summer"|" winter"|" autumn"
TEXTURE	-> " Chinese"|" Korean"|" northern"|" small"|" silk"
DATE    -> " first month"|" second month"|" third month"|" fourth month"|" fifth month"|" sixth month"|" seventh month"|" eighth month"|" tenth month"


# Core Items
POSSESSION 	-> POSESSOR "'s"
PEOPLE     	-> PEOPLEADJ:? " lover"|PEOPLEADJ:? " servant"|												PEOPLEADJ:? " girl"|PEOPLEADJ:? " boy"|PEOPLEADJ:? " sister"|PEOPLEADJ:? 				" lover"|" friend"|" peasant"|" priest"| POSESSOR|RELATIVE
POSESSOR	-> " lover"|" lover"|" friend"|" governor of" LOCATIONOUT|" priest"
RELATIVE	-> " sister"|" lover"|" brother"|" child"|" daughter"|" servant"|" mother"

OBJECT     -> " box"|" envelope"|" incense"|" flower"|" vase"|" cup"|" fan"|" scroll"				 |" plate"|" rake"
LITERATURE -> " letter"|" poem"|" sutra"|" tanka"
INSTRUMENT -> " koto"|" shaminsen"|" flute"
ANIMAL     -> " goose"|" ox"|" crane"|" carp"|" turtle"|" cat"|" dog"|" crow"				 |" salmon"|" monkey"|" bear"|" boar"|" nightingale"|" egret"
BIRD -> 	  " goose"|" crane"|" crow"|" nightingale"|" egret"
TIMEODAY   -> " night"|" dawn"|" twilight"|" dusk"|" evening"
WEATHER    -> " snow"|" rain"|" sun"|" shade"|" cloud"|" mist"| " fog"
CLOTHING   -> " robe"|" sleeve"|" gown"|" hat"|" veil"|" shawl"|" slipper"					 |" sandal"