// ===========================
// DATA ΓÇô 356 questions
// ===========================
const RAW_QUESTIONS = [
  {q:"Tr╞░ß╗¥ng kh├│a ch├¡nh l├á tr╞░ß╗¥ng:", opts:["Single Key","Unique Key","First Key","Primary Key"], ans:3},
  {q:"C├óu n├áo trong c├íc c├óu d╞░ß╗¢i ─æ├óy sai khi n├│i vß╗ü hß╗ç CSDL kh├ích-chß╗º?", opts:["Trong kiß║┐n tr├║c kh├ích-chß╗º, c├íc th├ánh phß║ºn t╞░╞íng t├íc vß╗¢i nhau tß║ío n├¬n hß╗ç thß╗æng gß╗ôm th├ánh phß║ºn y├¬u cß║ºu t├ái nguy├¬n v├á th├ánh phß║ºn cß║Ñp t├ái nguy├¬n","Hai th├ánh phß║ºn y├¬u cß║ºu t├ái nguy├¬n v├á th├ánh phß║ºn cß║Ñp t├ái nguy├¬n phß║úi c├ái ─æß║╖t tr├¬n c├╣ng mß╗Öt m├íy t├¡nh","Th├ánh phß║ºn cß║Ñp t├ái nguy├¬n th╞░ß╗¥ng ─æ╞░ß╗úc c├ái ─æß║╖t tß║íi mß╗Öt m├íy chß╗º tr├¬n mß║íng (cß╗Ñc bß╗Ö)","Th├ánh phß║ºn y├¬u cß║ºu t├ái nguy├¬n c├│ thß╗â c├ái ─æß║╖t tß║íi nhiß╗üu m├íy kh├íc (m├íy kh├ích) tr├¬n mß║íng"], ans:1},
  {q:"H├úy chß╗ìn ph╞░╞íng ├ín ─æ├║ng. Hai bß║úng trong mß╗Öt CSDL quan hß╗ç li├¬n kß║┐t vß╗¢i nhau th├┤ng qua:", opts:["─Éß╗ïa chß╗ë cß╗ºa c├íc bß║úng","T├¬n tr╞░ß╗¥ng","Thuß╗Öc t├¡nh cß╗ºa c├íc tr╞░ß╗¥ng ─æ╞░ß╗úc chß╗ìn (kh├┤ng nhß║Ñt thiß║┐t phß║úi l├á kh├│a)","Thuß╗Öc t├¡nh kh├│a"], ans:3},
  {q:"C├óu n├áo trong c├íc c├óu d╞░ß╗¢i ─æ├óy sai khi n├│i vß╗ü hß╗ç CSDL c├í nh├ón?", opts:["Ng╞░ß╗¥i d├╣ng ─æ├│ng vai tr├▓ l├á ng╞░ß╗¥i quß║ún trß╗ï CSDL","T├¡nh an to├án cß╗ºa hß╗ç CSDL c├í nh├ón rß║Ñt cao","Hß╗ç CSDL c├í nh├ón ─æ╞░ß╗úc l╞░u trß╗» tr├¬n 1 m├íy","Hß╗ç CSDL chß╗ë cho ph├⌐p 1 ng╞░ß╗¥i d├╣ng tß║íi mß╗Öt thß╗¥i ─æiß╗âm"], ans:1},
  {q:"Ti├¬u ch├¡ n├áo sau ─æ├óy th╞░ß╗¥ng ─æ╞░ß╗úc d├╣ng ─æß╗â chß╗ìn kh├│a ch├¡nh?", opts:["Kh├│a c├│ ├¡t thuß╗Öc t├¡nh nhß║Ñt","Kh├┤ng chß╗⌐a c├íc thuß╗Öc t├¡nh thay ─æß╗òi theo thß╗¥i gian","Kh├│a bß║Ñt k├¼","Chß╗ë l├á kh├│a c├│ mß╗Öt thuß╗Öc t├¡nh"], ans:0},
  {q:"Thß║┐ n├áo l├á c╞í sß╗ƒ dß╗» liß╗çu quan hß╗ç?", opts:["C╞í sß╗ƒ dß╗» liß╗çu ─æ╞░ß╗úc x├óy dß╗▒ng dß╗▒a tr├¬n m├┤ h├¼nh dß╗» liß╗çu quan hß╗ç","C╞í sß╗ƒ dß╗» liß╗çu d├╣ng ─æß╗â tß║ío lß║¡p, cß║¡p nhß║¡t v├á khai th├íc CSDL quan hß╗ç","C╞í sß╗ƒ dß╗» liß╗çu ─æ╞░ß╗úc x├óy dß╗▒ng dß╗▒a tr├¬n m├┤ h├¼nh dß╗» liß╗çu quan hß╗ç v├á khai th├íc CSDL quan hß╗ç","C╞í sß╗ƒ dß╗» liß╗çu d├╣ng ─æß╗â tß║ío lß║¡p, cß║¡p nhß║¡t v├á khai th├íc CSDL quan hß╗ç dß╗▒a tr├¬n m├┤ h├¼nh dß╗» liß╗çu quan hß╗ç"], ans:3},
  {q:"Li├¬n kß║┐t giß╗»a c├íc bß║úng ─æ╞░ß╗úc dß╗▒a tr├¬n:", opts:["Thuß╗Öc t├¡nh kh├│a","C├íc thuß╗Öc t├¡nh tr├╣ng t├¬n nhau giß╗»a c├íc bß║úng","├¥ ─æß╗ïnh cß╗ºa ng╞░ß╗¥i quß║ún trß╗ï hß╗ç CSDL","├¥ ─æß╗ïnh gh├⌐p c├íc bß║úng th├ánh mß╗Öt bß║úng c├│ nhiß╗üu thuß╗Öc t├¡nh h╞ín"], ans:0},
  {q:"C├óu n├áo sai trong c├íc c├óu d╞░ß╗¢i ─æ├óy khi n├│i vß╗ü ╞░u ─æiß╗âm cß╗ºa hß╗ç CSDL kh├ích-chß╗º?", opts:["Chi ph├¡ cho truyß╗ün th├┤ng giß║úm","Bß╗ò sung th├¬m m├íy kh├ích l├á dß╗à d├áng","Ph├ít triß╗ân v├á sß╗¡ dß╗Ñng c├íc hß╗ç CSDL kh├ích-chß╗º kh├í ─æ╞ín giß║ún, dß╗à d├áng","N├óng cao khß║ú n─âng ─æß║úm bß║úo t├¡nh nhß║Ñt qu├ín cß╗ºa dß╗» liß╗çu"], ans:2},
  {q:"Khß║│ng ─æß╗ïnh n├áo sau ─æ├óy vß╗ü CSDL quan hß╗ç l├á ─æ├║ng?", opts:["Tß║¡p hß╗úp c├íc bß║úng dß╗» liß╗çu","C╞í sß╗ƒ dß╗» liß╗çu ─æ╞░ß╗úc tß║ío ra tß╗½ hß╗ç QTCSDL Access","C╞í sß╗ƒ dß╗» liß╗çu m├á giß╗»a c├íc dß╗» liß╗çu c├│ quan hß╗ç vß╗¢i nhau","C╞í sß╗ƒ dß╗» liß╗çu ─æ╞░ß╗úc x├óy dß╗▒ng tr├¬n m├┤ h├¼nh dß╗» liß╗çu quan hß╗ç"], ans:3},
  {q:"C├óu n├áo sai trong c├íc c├óu d╞░ß╗¢i ─æ├óy?", opts:["Mß╗ùi bß║úng c├│ ├¡t nhß║Ñt mß╗Öt kh├│a","N├¬n chß╗ìn kh├│a ch├¡nh l├á kh├│a c├│ ├¡t thuß╗Öc t├¡nh nhß║Ñt","Trong mß╗Öt bß║úng c├│ thß╗â c├│ nhiß╗üu kh├│a ch├¡nh","Viß╗çc x├íc ─æß╗ïnh kh├│a phß╗Ñ thuß╗Öc v├áo quan hß╗ç logic cß╗ºa c├íc dß╗» liß╗çu chß╗⌐ kh├┤ng phß╗Ñ thuß╗Öc v├áo gi├í trß╗ï c├íc dß╗» liß╗çu"], ans:2},
  {q:"Trong qu├í tr├¼nh cß║¡p nhß║¡t dß╗» liß╗çu, ─æ╞░ß╗úc hß╗ç quß║ún trß╗ï CSDL kiß╗âm so├ít ─æß╗â ─æß║úm bß║úo t├¡nh chß║Ñt n├áo?", opts:["T├¡nh chß║Ñt r├áng buß╗Öc to├án vß║╣n","T├¡nh ─æß╗Öc lß║¡p","T├¡nh nhß║Ñt qu├ín","T├¡nh bß║úo mß║¡t"], ans:2},
  {q:"H├úy cho biß║┐t ├╜ kiß║┐n n├áo l├á ─æ├║ng. Vß╗¢i mß╗Öt bß║úng dß╗» liß╗çu, hß╗ç QTCSDL cho ph├⌐p:", opts:["Xem nß╗Öi dung c├íc bß║ún ghi","Xem mß╗æi li├¬n kß║┐t giß╗»a bß║úng ─æ├│ vß╗¢i c├íc bß║úng kh├íc","Xem mß╗Öt sß╗æ tr╞░ß╗¥ng cß╗ºa mß╗ùi bß║ún ghi","Tß║Ñt cß║ú ─æß╗üu ─æ├║ng"], ans:3},
  {q:"C├óu n├áo trong c├íc c├óu d╞░ß╗¢i ─æ├óy sai khi n├│i vß╗ü hß╗ç CSDL trung t├óm?", opts:["L├á hß╗ç CSDL ─æ╞░ß╗úc c├ái ─æß║╖t tr├¬n m├íy t├¡nh trung t├óm cho ph├⌐p nhiß╗üu ng╞░ß╗¥i sß╗¡ dß╗Ñng c├╣ng mß╗Öt l├║c","M├íy t├¡nh trung t├óm n├áy chß╗ë l├á mß╗Öt m├íy t├¡nh duy nhß║Ñt","Nhiß╗üu ng╞░ß╗¥i d├╣ng tß╗½ xa c├│ thß╗â truy cß║¡p v├áo CSDL n├áy th├┤ng qua thiß║┐t bß╗ï ─æß║ºu cuß╗æi v├á c├íc ph╞░╞íng tiß╗çn truyß╗ün th├┤ng","C├íc hß╗ç CSDL trung t├óm th╞░ß╗¥ng rß║Ñt lß╗¢n v├á c├│ nhiß╗üu ng╞░ß╗¥i d├╣ng"], ans:1},
  {q:"Trong c├íc ╞░u ─æiß╗âm d╞░ß╗¢i ─æ├óy, ╞░u ─æiß╗âm n├áo kh├┤ng phß║úi cß╗ºa c├íc hß╗ç CSDL ph├ón t├ín?", opts:["Dß╗» liß╗çu c├│ t├¡nh sß║╡n s├áng","Dß╗» liß╗çu ─æ╞░ß╗úc chia sß║╗ tr├¬n mß║íng nh╞░ng vß║½n cho ph├⌐p quß║ún trß╗ï dß╗» liß╗çu ─æß╗ïa ph╞░╞íng","Viß╗çc thiß║┐t kß║┐ CSDL ─æ╞ín giß║ún, chi ph├¡ thß║Ñp h╞ín","Dß╗» liß╗çu c├│ t├¡nh tin cß║¡y cao"], ans:2},
  {q:"C├óu n├áo sai trong c├íc c├óu d╞░ß╗¢i ─æ├óy khi n├│i vß╗ü ╞░u ─æiß╗âm cß╗ºa hß╗ç CSDL kh├ích-chß╗º?", opts:["Khß║ú n─âng truy cß║¡p rß╗Öng r├úi ─æß║┐n c├íc CSDL","Ph├ít triß╗ân v├á sß╗¡ dß╗Ñng c├íc hß╗ç CSDL kh├ích-chß╗º kh├í ─æ╞ín giß║ún, dß╗à d├áng","N├óng cao khß║ú n─âng thß╗▒c hiß╗çn","Chi ph├¡ cho phß║ºn cß╗⌐ng c├│ thß╗â giß║úm"], ans:1},
  {q:"Trong c├íc phß║ºn mß╗üm sau ─æ├óy, phß║ºn mß╗üm n├áo kh├┤ng phß║úi l├á hß╗ç quß║ún trß╗ï CSDL quan hß╗ç?", opts:["Microsoft Excel","Microsoft Access","Microsoft SQL server","Oracle"], ans:0},
  {q:"─É├óu kh├┤ng phß║úi l├á c├íc b╞░ß╗¢c x├óy dß╗▒ng c╞í sß╗ƒ dß╗» liß╗çu?", opts:["Thiß║┐t kß║┐","Khß║úo s├ít","Chß║íy thß╗¡","K├╜ hß╗úp ─æß╗ông"], ans:3},
  {q:"H├úy chß╗ìn ph╞░╞íng ├ín trß║ú lß╗¥i ─æ├║ng. Tß║íi sao phß║úi khai b├ío k├¡ch th╞░ß╗¢c cho mß╗ùi tr╞░ß╗¥ng?", opts:["─Éß╗â gi├║p hß╗ç thß╗æng kiß╗âm tra t├¡nh ─æ├║ng ─æß║»n khi nhß║¡p dß╗» liß╗çu","─Éß╗â c├│ thß╗â t├¡nh k├¡ch th╞░ß╗¢c cß╗ºa bß║ún ghi v├á x├íc ─æß╗ïnh vß╗ï tr├¡ c├íc tr╞░ß╗¥ng trong bß║ún ghi","─Éß╗â hß╗ç thß╗æng dß╗▒ trß╗» v├╣ng nhß╗¢ phß╗Ñc vß╗Ñ ghi dß╗» liß╗çu","Tß║Ñt cß║ú ─æß╗üu ─æ├║ng"], ans:3},
  {q:"C├íc b╞░ß╗¢c ch├¡nh ─æß╗â tß║ío CSDL:", opts:["Tß║ío bß║úng; Chß╗ìn kh├│a ch├¡nh cho bß║úng; ─Éß║╖t t├¬n bß║úng v├á l╞░u cß║Ñu tr├║c bß║úng; Tß║ío li├¬n kß║┐t bß║úng","Tß║ío bß║úng; Chß╗ìn kh├│a ch├¡nh cho bß║úng; ─Éß║╖t t├¬n bß║úng v├á l╞░u cß║Ñu tr├║c bß║úng","Tß║ío bß║úng; Chß╗ìn kh├│a ch├¡nh cho bß║úng; L╞░u cß║Ñu tr├║c bß║úng; Tß║ío li├¬n kß║┐t bß║úng; cß║¡p nhß║¡t v├á khai th├íc CSDL","Tß║ío bß║úng; Chß╗ìn kh├│a ch├¡nh cho bß║úng; ─Éß║╖t t├¬n bß║úng; Tß║ío li├¬n kß║┐t bß║úng"], ans:0},
  {q:"SQL l├á t├¬n viß║┐t tß║»t cß╗ºa:", opts:["Structure Query Language","Query Structure Language","Structure Question Language","Structure Query Locator"], ans:0},
  {q:"An to├án dß╗» liß╗çu c├│ thß╗â hiß╗âu l├á?", opts:["Dß╗à d├áng cho c├┤ng viß╗çc bß║úo tr├¼ dß╗» liß╗çu","Ng─ân chß║╖n c├íc truy nhß║¡p tr├íi ph├⌐p, sai quy ─æß╗ïnh tß╗½ trong ra hoß║╖c tß╗½ ngo├ái v├áo","Thß╗æng nhß║Ñt c├íc ti├¬u chuß║⌐n, thß╗º tß╗Ñc v├á c├íc biß╗çn ph├íp bß║úo vß╗ç, an to├án dß╗» liß╗çu","T├¡nh nhß║Ñt qu├ín v├á to├án vß║╣n dß╗» liß╗çu"], ans:1},
  {q:"M├┤ h├¼nh ngo├ái l├á?", opts:["Nß╗Öi dung th├┤ng tin cß╗ºa to├án bß╗Ö CSDL","Nß╗Öi dung th├┤ng tin cß╗ºa to├án bß╗Ö CSDL d╞░ß╗¢i c├ích nh├¼n cß╗ºa ng╞░ß╗¥i sß╗¡ dß╗Ñng","Nß╗Öi dung th├┤ng tin cß╗ºa mß╗Öt phß║ºn c╞í sß╗ƒ dß╗» liß╗çu","Nß╗Öi dung th├┤ng tin cß╗ºa mß╗Öt phß║ºn dß╗» liß╗çu d╞░ß╗¢i c├ích nh├¼n cß╗ºa ng╞░ß╗¥i sß╗¡ dß╗Ñng"], ans:3},
  {q:"M├┤ h├¼nh trong l├á?", opts:["L├á mß╗Öt trong c├íc m├┤ h├¼nh biß╗âu diß╗àn CSDL d╞░ß╗¢i dß║íng l╞░u trß╗» vß║¡t l├╜","M├┤ h├¼nh biß╗âu diß╗àn c╞í sß╗ƒ dß╗» liß╗çu tr├¼u t╞░ß╗úng ß╗ƒ mß╗⌐c quan niß╗çm","C├│ nhiß╗üu c├ích biß╗âu diß╗àn CSDL d╞░ß╗¢i dß║íng l╞░u trß╗» vß║¡t l├╜","M├┤ h├¼nh l╞░u trß╗» vß║¡t l├╜ dß╗» liß╗çu"], ans:0},
  {q:"├ünh xß║í quan niß╗çm-ngo├ái?", opts:["Quan hß╗ç giß╗»a m├┤ h├¼nh trong v├á m├┤ h├¼nh trong","Quan hß╗ç giß╗»a m├┤ h├¼nh ngo├ái v├á m├┤ h├¼nh ngo├ái","Quan hß╗ç giß╗»a m├┤ h├¼nh ngo├ái v├á m├┤ h├¼nh trong","Quan hß╗ç m├┤t-mß╗Öt giß╗»a m├┤ h├¼nh ngo├ái v├á m├┤ h├¼nh dß╗» liß╗çu"], ans:2},
  {q:"Mß╗Ñc ti├¬u cß╗ºa c╞í sß╗ƒ dß╗» liß╗çu l├á?", opts:["Kh├┤ng l├ám thay ─æß╗òi chiß║┐n l╞░ß╗úc truy nhß║¡p c╞í sß╗ƒ dß╗» liß╗çu","Bß║úo ─æß║úm t├¡nh ─æß╗Öc lß║¡p dß╗» liß╗çu","Kh├┤ng l├ám thay ─æß╗òi cß║Ñu tr├║c l╞░u trß╗» dß╗» liß╗çu","Dß╗» liß╗çu chß╗ë ─æ╞░ß╗úc biß╗âu diß╗àn, m├┤ tß║ú mß╗Öt c├ích duy nhß║Ñt"], ans:1},
  {q:"R├áng buß╗Öc giß║úi t├¡ch?", opts:["Quy tß║»c biß╗âu diß╗àn cß║Ñu tr├║c dß╗» liß╗çu","Mß╗æi quan hß╗ç giß╗»a c├íc thuß╗Öc t├¡nh ─æ╞░ß╗úc biß╗âu diß╗àn bß║▒ng c├íc biß╗âu thß╗⌐c to├ín hß╗ìc","M├┤ tß║ú t├¡nh chß║Ñt cß╗ºa c├íc thuß╗Öc t├¡nh khi tß║ío lß║¡p CSDL","C├íc ph├⌐p to├ín ─æß║íi sß╗æ quan hß╗ç"], ans:1},
  {q:"R├áng buß╗Öc logic?", opts:["Mß╗æi quan hß╗ç giß╗»a c├íc thuß╗Öc t├¡nh ─æ╞░ß╗úc biß╗âu diß╗àn bß║▒ng c├íc phß╗Ñ thuß╗Öc h├ám","Mß╗æi quan hß╗ç giß╗»a c├íc thuß╗Öc t├¡nh ─æ╞░ß╗úc biß╗âu diß╗àn bß║▒ng c├íc biß╗âu thß╗⌐c to├ín hß╗ìc","C├íc ph├⌐p so s├ính","C├íc ph├⌐p to├ín quan hß╗ç"], ans:0},
  {q:"M├┤ h├¼nh CSDL ph├ón cß║Ñp l├á m├┤ h├¼nh?", opts:["Dß╗» liß╗çu ─æ╞░ß╗úc biß╗âu diß╗àn bß║▒ng con trß╗Å","Dß╗» liß╗çu ─æ╞░ß╗úc biß╗âu diß╗àn bß║▒ng mß╗æi quan hß╗ç thß╗▒c thß╗â","Dß╗» liß╗çu ─æ╞░ß╗úc biß╗âu diß╗àn bß║▒ng bß║úng","Dß╗» liß╗çu ─æ╞░ß╗úc biß╗âu diß╗àn bß║▒ng cß║Ñu tr├║c c├óy"], ans:3},
  {q:"Khi thao t├íc bß║▒ng ng├┤n ngß╗» thao t├íc dß╗» liß╗çu tr├¬n CSDL ph├ón cß║Ñp?", opts:["─Éß║úm bß║úo t├¡nh ─æß╗Öc lß║¡p cß╗ºa dß╗» liß╗çu","─Éß║úm bß║úo t├¡nh ß╗òn ─æß╗ïnh","─Éß║úm bß║úo t├¡nh to├án vß║╣n cß╗ºa dß╗» liß╗çu","C├│ nhiß╗üu khß║ú n─âng xß║⌐y ra dß╗ï th╞░ß╗¥ng th├┤ng tin"], ans:3},
  {q:"─Éß║╖c tr╞░ng cß║Ñu tr├║c cß╗ºa m├┤ h├¼nh mß║íng l├á?", opts:["Chß╗⌐a c├íc li├¬n kß║┐t mß╗Öt - mß╗Öt v├á mß╗Öt - nhiß╗üu","Chß╗⌐a c├íc li├¬n kß║┐t mß╗Öt - mß╗Öt, mß╗Öt - nhiß╗üu v├á nhiß╗üu - nhiß╗üu","Chß╗⌐a c├íc li├¬n kß║┐t mß╗Öt - mß╗Öt, mß╗Öt - nhiß╗üu v├á nhiß╗üu - nhiß╗üu","Chß╗⌐a c├íc li├¬n kß║┐t nhiß╗üu - mß╗Öt v├á mß╗Öt - nhiß╗üu"], ans:1},
  {q:"Trong CSDL mß║íng, khi thß╗▒c hiß╗çn c├íc ph├⌐p t├¼m kiß║┐m?", opts:["Kh├┤ng phß╗⌐c tß║íp","CSDL c├áng lß╗¢n th├¼ t├¼m kiß║┐m c├áng phß╗⌐c tß║íp","C├óu hß╗Åi v├á kß║┐t quß║ú c├íc c├óu hß╗Åi t├¼m kiß║┐m th╞░ß╗¥ng ─æß╗æi xß╗⌐ng vß╗¢i nhau","C├óu hß╗Åi v├á kß║┐t quß║ú c├íc c├óu hß╗Åi t├¼m kiß║┐m kh├┤ng ─æß╗æi xß╗⌐ng vß╗¢i nhau"], ans:3},
  {q:"Trong m├┤ h├¼nh c╞í sß╗ƒ dß╗» liß╗çu quan hß╗ç?", opts:["Thß╗⌐ tß╗▒ cß╗ºa c├íc cß╗Öt l├á quan trß╗ìng","Thß╗⌐ tß╗▒ cß╗ºa c├íc cß╗Öt l├á kh├┤ng quan trß╗ìng","Thß╗⌐ tß╗▒ cß╗ºa c├íc h├áng l├á quan trß╗ìng","Thß╗⌐ tß╗▒ cß╗ºa c├íc h├áng l├á kh├┤ng quan trß╗ìng"], ans:1},
  {q:"Ng├┤n ngß╗» thao t├íc dß╗» liß╗çu quan hß╗ç?", opts:["Phß╗⌐c tß║íp, tß╗òn thß║Ñt th├┤ng tin","─É╞ín giß║ún v├á thuß║¡n tiß╗çn cho ng╞░ß╗¥i sß╗¡ dß╗Ñng","Kh├┤ng to├án vß║╣n dß╗» liß╗çu","─É╞ín giß║ún nh╞░ng kh├┤ng tiß╗çn lß╗úi cho ng╞░ß╗¥i sß╗¡ dß╗Ñng"], ans:1},
  {q:"Thß╗▒c thß╗â l├á?", opts:["C├íc ─æß╗æi t╞░ß╗úng dß╗» liß╗çu","C├íc quan hß╗ç","C├íc mß╗æi li├¬n kß║┐t giß╗»a c├íc ─æß╗æi t╞░ß╗úng","C├íc ─æß╗æi t╞░ß╗úng v├á mß╗æi li├¬n kß║┐t giß╗»a c├íc ─æß╗æi t╞░ß╗úng"], ans:0},
  {q:"Nß║┐u A => B v├á A => C th├¼ suy ra?", opts:["A => BC","A => AB","AB => BC","AA => C"], ans:0},
  {q:"Phß╗Ñ thuß╗Öc n├áo sau ─æ├óy l├á phß╗Ñ thuß╗Öc ─æß║ºy ─æß╗º?", opts:["(Sß╗æ thß╗⌐ tß╗▒, m├ú lß╗¢p) => Hß╗ì t├¬n sinh vi├¬n","(M├ú b├ío, m├ú kh├ích h├áng) => Gi├í b├ío","(Sß╗æ chß╗⌐ng minh th╞░, m├ú nh├ón vi├¬n) => Qu├í tr├¼nh c├┤ng t├íc","(Sß╗æ ho├í ─æ╞ín, m├ú kh├ích h├áng) => Hß╗ì t├¬n kh├ích h├áng"], ans:2},
  {q:"Mß╗Ñc ti├¬u cß╗ºa c╞í sß╗ƒ dß╗» liß╗çu l├á?", opts:["T├¡nh phß╗Ñ thuß╗Öc dß╗» liß╗çu","T├¡nh to├án vß║╣n cß╗ºa dß╗» liß╗çu","T├¡nh ─æß╗Öc lß║¡p cß╗ºa dß╗» liß╗çu","Phß║ún ├ính trung thß╗▒c thß║┐ giß╗¢i hiß╗çn thß╗▒c dß╗» liß╗çu"], ans:2},
  {q:"C├│ thß╗â ch├¿n th├¬m th├┤ng tin mß╗Öt loß║íi c├íp khi ch╞░a ─æ╞░ß╗úc lß║»p ─æß║╖t?", opts:["Kh├┤ng thß╗â ─æ╞░ß╗úc v├¼ gi├í trß╗ï kho├í kh├┤ng x├íc ─æß╗ïnh","C├│ thß╗â ch├¿n ─æ╞░ß╗úc","Kh├┤ng thß╗â ─æ╞░ß╗úc v├¼ m├óu thuß║½n th├┤ng tin","Kh├┤ng thß╗â ─æ╞░ß╗úc v├¼ dß╗ï th╞░ß╗¥ng th├┤ng tin"], ans:0},
  {q:"Ng├┤n ngß╗» thao t├íc dß╗» liß╗çu l├á?", opts:["Mß╗Öt tß║¡p c├íc k├╜ hiß╗çu biß╗âu diß╗àn dß╗» liß╗çu","Mß╗Öt tß║¡p c├íc ph├⌐p to├ín d├╣ng ─æß╗â cß║¡p nhß║¡t, bß╗ò sung tr├¬n c├íc hß╗ç c╞í sß╗ƒ dß╗» liß╗çu","Mß╗Öt tß║¡p c├íc quy tß║»c biß╗âu diß╗àn dß╗» liß╗çu","Mß╗Öt tß║¡p c├íc ph├⌐p to├ín d├╣ng ─æß╗â thao t├íc tr├¬n c├íc hß╗ç c╞í sß╗ƒ dß╗» liß╗çu"], ans:3},
  {q:"Kß║┐t quß║ú cß╗ºa c├íc ph├⌐p thao t├íc dß╗» liß╗çu l├á?", opts:["Chuß╗ùi dß╗» liß╗çu","Tß╗çp dß╗» liß╗çu","Quan hß╗ç","C╞í sß╗ƒ dß╗» liß╗çu"], ans:2},
  {q:"╞»u ─æiß╗âm cß╗ºa c╞í sß╗ƒ dß╗» liß╗çu l├á?", opts:["Giß║úm d╞░ thß╗½a, nhß║Ñt qu├ín v├á to├án vß║╣n cß╗ºa dß╗» liß╗çu","C├íc thuß╗Öc t├¡nh ─æ╞░ß╗úc m├┤ tß║ú trong nhiß╗üu tß╗çp dß╗» liß╗çu kh├íc nhau","Khß║ú n─âng xuß║Ñt hiß╗çn m├óu thuß║½n v├á kh├┤ng nhß║Ñt qu├ín dß╗» liß╗çu","Xuß║Ñt hiß╗çn dß╗ï th╞░ß╗¥ng th├┤ng tin"], ans:0},
  {q:"Dß╗ï th╞░ß╗¥ng th├┤ng tin c├│ thß╗â?", opts:["Dß╗» liß╗çu nhß║Ñt qu├ín v├á to├án vß║╣n","Kh├┤ng xuß║Ñt hiß╗çn m├óu thuß║½n th├┤ng tin","Thß╗½a thiß║┐u th├┤ng tin trong l╞░u trß╗»","Phß║ún ├ính ─æ├║ng hiß╗çn thß╗▒c kh├ích quan dß╗» liß╗çu"], ans:2},
  {q:"Ng╞░ß╗¥i sß╗¡ dß╗Ñng c├│ thß╗â truy nhß║¡p?", opts:["To├án bß╗Ö c╞í sß╗ƒ dß╗» liß╗çu","Hß║ín chß║┐","Mß╗Öt phß║ºn c╞í sß╗ƒ dß╗» liß╗çu","Phß╗Ñ thuß╗Öc v├áo quyß╗ün truy nhß║¡p"], ans:3},
  {q:"Hß╗ç quß║ún trß╗ï CSDL DBMS (DataBase Management System) l├á?", opts:["Hß╗ç thß╗æng phß║ºn mß╗üm ─æiß╗üu khiß╗ân c├íc chiß║┐n l╞░ß╗úc truy nhß║¡p v├á tß╗ò chß╗⌐c l╞░u trß╗» c╞í sß╗ƒ dß╗» liß╗çu","Tß║ío cß║Ñu tr├║c dß╗» liß╗çu t╞░╞íng ß╗⌐ng vß╗¢i m├┤ h├¼nh dß╗» liß╗çu","Cß║¡p nhß║¡t, ch├¿n th├¬m, loß║íi bß╗Å hay sß╗¡a ─æß╗òi dß╗» liß╗çu mß╗⌐c tß╗çp","─Éß║úm bß║úo an to├án, bß║úo mß║¡t dß╗» liß╗çu v├á t├¡nh to├án vß║╣n dß╗» liß╗çu"], ans:0},
  {q:"─Éß║╖c tr╞░ng cß╗ºa mß╗Öt m├┤ h├¼nh dß╗» liß╗çu l├á?", opts:["Ng╞░ß╗¥i sß╗¡ dß╗Ñng c├│ quyß╗ün truy nhß║¡p tß║íi mß╗ìi l├║c, mß╗ìi n╞íi","T├¡nh ß╗òn ─æß╗ïnh, t├¡nh ─æ╞ín giß║ún, cß║ºn phß║úi kiß╗âm tra d╞░ thß╗½a, ─æß╗æi xß╗⌐ng v├á c├│ c╞í sß╗ƒ l├╜ thuyß║┐t vß╗»ng chß║»c","Biß╗âu diß╗àn dß╗» liß╗çu ─æ╞ín giß║ún v├á kh├┤ng cß║Ñu tr├║c","M├┤ h├¼nh dß╗» liß╗çu ─æ╞ín giß║ún"], ans:1},
  {q:"Khi thao t├íc bß║▒ng ng├┤n ngß╗» thao t├íc dß╗» liß╗çu tr├¬n CSDL ph├ón cß║Ñp?", opts:["C├│ nhiß╗üu khß║ú n─âng xß║úy ra dß╗ï th╞░ß╗¥ng th├┤ng tin","─Éß║úm bß║úo t├¡nh ─æß╗Öc lß║¡p cß╗ºa dß╗» liß╗çu","─Éß║úm bß║úo t├¡nh to├án vß║╣n cß╗ºa dß╗» liß╗çu","─Éß║úm bß║úo t├¡nh ß╗òn ─æß╗ïnh"], ans:0},
  {q:"Trong CSDL mß║íng, khi th├¬m c├íc bß║ún ghi mß╗¢i th├¼?", opts:["Phß║úi ─æß║úm bß║úo ─æ╞░ß╗úc t├¡nh nhß║Ñt qu├ín v├á t├¡nh to├án vß║╣n cß╗ºa dß╗» liß╗çu","D╞░ thß╗½a th├┤ng tin","Kh├┤ng ─æß║úm bß║úo t├¡nh nhß║Ñt qu├ín v├á to├án vß║╣n cß╗ºa dß╗» liß╗çu","M├óu thuß║½n th├┤ng tin"], ans:2},
  {q:"Cß║ºn thiß║┐t phß║úi chuß║⌐n ho├í dß╗» liß╗çu v├¼?", opts:["Khi thß╗▒c hiß╗çn c├íc ph├⌐p l╞░u trß╗» tr├¬n c├íc quan hß╗ç ch╞░a ─æ╞░ß╗úc chuß║⌐n ho├í th╞░ß╗¥ng xuß║Ñt hiß╗çn c├íc dß╗ï th╞░ß╗¥ng th├┤ng tin","Khi thß╗▒c hiß╗çn c├íc ph├⌐p t├ích - kß║┐t nß╗æi tß╗▒ nhi├¬n c├íc quan hß╗ç","Khi thß╗▒c hiß╗çn c├íc ph├⌐p t├¼m kiß║┐m, xuß║Ñt hiß╗çn c├íc dß╗ï th╞░ß╗¥ng th├┤ng tin","Gi├í trß╗ï kho├í nhß║¡n gi├í trß╗ï null hay gi├í trß╗ï kh├┤ng x├íc ─æß╗ïnh"], ans:0},
  {q:"Mß╗Ñc ti├¬u cß╗ºa chuß║⌐n ho├í dß╗» liß╗çu l├á?", opts:["─Éß║úm bß║úo t├¡nh bß║úo mß║¡t dß╗» liß╗çu","Triß╗çt ti├¬u mß╗⌐c cao nhß║Ñt khß║ú n─âng xuß║Ñt hiß╗çn c├íc dß╗ï th╞░ß╗¥ng th├┤ng tin","─Éß║úm bß║úo t├¡nh nhß║Ñt qu├ín dß╗» liß╗çu","─Éß║úm bß║úo cho viß╗çc l╞░u trß╗» dß╗» liß╗çu"], ans:1},
  {q:"Quan hß╗ç gß╗ôm c├íc thuß╗Öc t├¡nh m├ú sß╗æ, hß╗ì t├¬n v├á ─æß╗ïa chß╗ë ß╗ƒ dß║íng chuß║⌐n n├áo?", opts:["Dß║íng chuß║⌐n 2NF","Dß║íng chuß║⌐n 1NF, kh├┤ng l├á 2NF","Dß║íng chuß║⌐n 3NF","Dß║íng chuß║⌐n 2NF, kh├┤ng l├á 3NF"], ans:2},
  {q:"C├íc to├ín hß║íng trong c├íc ph├⌐p to├ín l├á?", opts:["C├íc biß╗âu thß╗⌐c","C├íc quan hß╗ç","C├íc thuß╗Öc t├¡nh","C├íc bß╗Ö n gi├í trß╗ï"], ans:1},
  {q:"Ph├⌐p sß╗¡a ─æß╗òi l├á ph├⌐p to├ín?", opts:["Sß╗¡a ─æß╗òi gi├í trß╗ï cß╗ºa mß╗Öt sß╗æ thuß╗Öc t├¡nh","Sß╗¡a ─æß╗òi m├┤ tß║ú c├íc thuß╗Öc t├¡nh","Sß╗¡a ─æß╗òi gi├í trß╗ï cß╗ºa mß╗Öt quan hß╗ç hay mß╗Öt nh├│m c├íc quan hß╗ç","Sß╗¡a ─æß╗òi gi├í trß╗ï cß╗ºa mß╗Öt bß╗Ö hay mß╗Öt nh├│m c├íc bß╗Ö"], ans:3},
  {q:"Thß╗⌐ tß╗▒ ─æ├║ng trong c├óu lß╗çnh SELECT l├á?", opts:["SELECT, FROM, WHERE, GROUP BY HAVING, ORDER BY","SELECT, FROM, GROUP BY HAVING, ORDER BY","SELECT, FROM, GROUP BY HAVING, ORDER BY","SELECT, FROM, GROUP BY HAVING, WHERE, ORDER BY"], ans:0},
  {q:"Ph├⌐p to├ín tß║¡p hß╗úp trong mß╗çnh ─æß╗ü WHERE bao gß╗ôm?", opts:["C├íc ph├⌐p ─æß║íi sß╗æ quan hß╗ç","C├íc ph├⌐p sß╗æ hß╗ìc v├á c├íc ph├⌐p so s├ính","Biß╗âu thß╗⌐c ─æß║íi sß╗æ","C├íc ph├⌐p so s├ính"], ans:1},
  {q:"C├íc ph├⌐p to├ín gß╗Öp nh├│m ─æ╞░ß╗úc sß╗¡ dß╗Ñng sau mß╗çnh ─æß╗ü?", opts:["SELECT","FROM","WHERE","GROUP BY"], ans:3},
  {q:"Ph├⌐p chß╗ìn ─æ╞░ß╗úc thß╗▒c hiß╗çn sau mß╗çnh ─æß╗ü n├áo trong SELECT - FROM - WHERE?", opts:["GROUP BY HAVING","WHERE","SELECT","FROM"], ans:1},
  {q:"Ng├┤n ngß╗» ─æß╗ïnh ngh─⌐a dß╗» liß╗çu - DDL (Data Definition Language):", opts:["─É╞░ß╗úc ─æß║╖c tß║ú bß║▒ng c├ích ch╞░╞íng tr├¼nh ß╗⌐ng dß╗Ñng","─É╞░ß╗úc ─æß║╖c tß║ú bß║▒ng mß╗Öt phß║ºn cß╗ºa hß╗ç quß║ún trß╗ï c╞í sß╗ƒ dß╗» liß╗çu","─É╞░ß╗úc ─æß║╖c tß║ú bß║▒ng mß╗Öt ng├┤n ngß╗» dß╗» liß╗çu","─É╞░ß╗úc ─æß║╖c tß║ú bß║▒ng mß╗Öt ng├┤n ngß╗», mß╗Öt phß║ºn cß╗ºa hß╗ç quß║ún trß╗ï c╞í sß╗ƒ dß╗» liß╗çu"], ans:3},
  {q:"Hai biß╗âu thß╗⌐c E1 v├á E2 t╞░╞íng ─æ╞░╞íng vß╗¢i nhau, nß║┐u:", opts:["Ch├║ng biß╗âu diß╗àn c├╣ng mß╗Öt ├ính xß║í","C├íc quan hß╗ç giß╗æng nhau trong biß╗âu thß╗⌐c","C├íc kß║┐t quß║ú giß╗æng nhau","C├íc quan hß╗ç trong c├íc biß╗âu thß╗⌐c c├╣ng miß╗ün x├íc ─æß╗ïnh"], ans:0},
  {q:"An to├án mß╗⌐c ─æß╗Ö mß║íng l├á?", opts:["Bß║úo vß╗ç th├┤ng tin tr├¬n ─æ╞░ß╗¥ng truyß╗ün","Cho ph├⌐p truy cß║¡p tß╗½ xa, c├│ kiß╗âm so├ít","Cho ph├⌐p truy cß║¡p tß╗½ xa","Kh├┤ng cho ph├⌐p truy cß║¡p tß╗½ xa"], ans:0},
  {q:"Dß║íng cß║Ñp quyß╗ün truy xuß║Ñt trong SQL l├á?", opts:["GRANT ON TO","GRANT GO TO","GRANT TO","GRANT READ ON"], ans:0},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh sau ─æ├óy l├á ─æ├║ng nhß║Ñt?", opts:["Sß╗▒ kh├┤ng nhß║Ñt qu├ín dß╗» liß╗çu trong l╞░u trß╗» l├ám cho dß╗» liß╗çu mß║Ñt ─æi t├¡nh to├án vß║╣n","T├¡nh to├án vß║╣n dß╗» liß╗çu ─æß║úm bß║úo dß╗» liß╗çu lu├┤n lu├┤n ─æ├║ng","T├¡nh nhß║Ñt qu├ín dß╗» liß╗çu ─æß║úm bß║úo cho sß╗▒ cß║¡p nhß║¡t, bß╗ò sung dß╗à d├áng","Tß╗ò chß╗⌐c l╞░u trß╗» theo l├╜ thuyß║┐t c╞í sß╗ƒ dß╗» liß╗çu, c├íc thuß╗Öc t├¡nh c├│ thß╗â lß║╖p lß║íi"], ans:0},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt?", opts:["Dß╗» liß╗çu ─æ╞░ß╗úc biß╗âu diß╗àn, m├┤ tß║ú nhiß╗üu c├ích kh├íc nhau","Ng╞░ß╗¥i sß╗¡ dß╗Ñng khi thao t├íc tr├¬n c├íc c╞í sß╗ƒ dß╗» liß╗çu c├│ thß╗â l├ám thay ─æß╗òi cß║Ñu tr├║c l╞░u trß╗» dß╗» liß╗çu v├á chiß║┐n l╞░ß╗úc truy nhß║¡p c╞í sß╗ƒ dß╗» liß╗çu","Cß║Ñu tr├║c l╞░u trß╗» v├á c├íc hß╗ç ch╞░╞íng tr├¼nh ß╗⌐ng dß╗Ñng tr├¬n ─æß╗Öc lß║¡p vß╗¢i nhau","Mß╗Ñc ti├¬u cß╗ºa c├íc hß╗ç CSDL l├á: t├¡nh bß║Ñt biß║┐n cuß║ú c├íc hß╗ç ß╗⌐ng dß╗Ñng ─æß╗æi vß╗¢i sß╗▒ thay ─æß╗òi trong cß║Ñu tr├║c l╞░u trß╗» v├á chiß║┐n l╞░ß╗úc truy nhß║¡p dß╗» liß╗çu"], ans:3},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt?", opts:["Chuß║⌐n ho├í dß╗» liß╗çu l├á qu├í tr├¼nh t├ích quan hß╗ç kh├┤ng l├ám tß╗òn thß║Ñt th├┤ng tin","Quan hß╗ç gß╗æc ─æ╞░ß╗úc chß╗⌐a trong quan hß╗ç kß║┐t nß╗æi tß╗▒ nhi├¬n cß╗ºa c├íc quan hß╗ç chiß║┐u","Dß╗» liß╗çu l╞░u trß╗» trong CSDL phß║ún ß║únh t├¡nh to├án vß║╣n dß╗» liß╗çu","Chuß║⌐n ho├í dß╗» liß╗çu l├á qu├í tr├¼nh thß╗▒c hiß╗çn c├íc ph├⌐p l╞░u trß╗»"], ans:0},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü mß╗Ñc ti├¬u?", opts:["T├ích quan hß╗ç l├á thß╗▒c hiß╗çn tß╗æi ╞░u truy vß║Ñn, t├¼m kiß║┐m","T├ích quan hß╗ç l├á nhß║▒m ─æß║úm bß║úo t├¡nh ─æß╗Öc lß║¡p dß╗» liß╗çu","T├ích quan hß╗ç l├á thß╗▒c hiß╗çn tß╗æi ╞░u l╞░u trß╗», tiß║┐t kiß╗çm bß╗Ö nhß╗¢","T├ích quan hß╗ç l├á l├ám giß║úm nhß║╣ t├¡nh to├ín"], ans:1},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt?", opts:["Khi thß╗▒c hiß╗çn ph├⌐p t├ích, quan hß╗ç gß╗æc kh├┤ng tß╗òn thß║Ñt","Khi thß╗▒c hiß╗çn ph├⌐p t├ích, quan hß╗ç gß╗æc bß╗ï tß╗òn thß║Ñt","Khi thß╗▒c hiß╗çn ph├⌐p t├ích, quan hß╗ç gß╗æc lu├┤n lu├┤n tß╗òn thß║Ñt","Khi thß╗▒c hiß╗çn ph├⌐p t├ích, quan hß╗ç gß╗æc c├│ thß╗â bß╗ï tß╗òn thß║Ñt"], ans:3},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt?", opts:["Cß║Ñu tr├║c dß╗» liß╗çu trong c├íc quan hß╗ç 1NF cho ph├⌐p sß╗¡a ─æß╗òi bß╗ò sung thuß║¡n tiß╗çn","Cß║Ñu tr├║c dß╗» liß╗çu trong c├íc quan hß╗ç 1NF ß║⌐n chß╗⌐a dß╗ï th╞░ß╗¥ng th├┤ng tin","Cß║Ñu tr├║c dß╗» liß╗çu trong c├íc quan hß╗ç 1NF g├óy kh├│ kh─ân truy vß║Ñn th├┤ng tin","Cß║Ñu tr├║c dß╗» liß╗çu trong c├íc quan hß╗ç 1NF ─æ╞ín giß║ún"], ans:1},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi khß║úo s├ít quan hß╗ç gß╗ôm c├íc thuß╗Öc t├¡nh: M├ú c├íp, t├¬n c├íp, gi├í, m├ú n╞░ß╗¢c sß║ún xuß║Ñt, n╞░ß╗¢c sß║ún xuß║Ñt?", opts:["L├á quan hß╗ç 3NF","L├á quan hß╗ç 3NF, kh├┤ng phß║úi l├á quan hß╗ç 2NF","L├á quan hß╗ç 2NF v├á kh├┤ng chß╗⌐a c├íc phß╗Ñ thuß╗Öc bß║»c cß║ºu","Tß╗ôn tß║íi phß╗Ñ thuß╗Öc m├á vß║┐ phß║úi v├á tr├íi kh├┤ng phß║úi l├á thuß╗Öc t├¡nh kho├í"], ans:3},
  {q:"Qu├í tr├¼nh tß╗æi ╞░u ho├í c├íc c├óu hß╗Åi truy vß║Ñn dß╗» liß╗çu l├á?", opts:["Kß║┐t quß║ú cß╗ºa c├íc ph├⌐p to├ín ─æ╞░ß╗úc biß╗âu diß╗àn duy nhß║Ñt bß║▒ng mß╗Öt quan hß╗ç","Cß║ºn thiß║┐t phß║úi biß║┐n ─æß╗òi c├íc c├óu hß╗Åi hß╗úp l├╜","Biß║┐n ─æß╗òi c├óu hß╗Åi sao cho chi ph├¡ thß╗¥i gian v├á sß╗¡ dß╗Ñng bß╗Ö nhß╗¢ l├á ├¡t nhß║Ñt","Giß║úm chi ph├¡ thß╗¥i gian thß╗▒c hiß╗çn c├íc ph├⌐p to├ín c├▓n ├¡t nhß║Ñt"], ans:2},
  {q:"T├¡nh ─æß╗Öc lß║¡p dß╗» liß╗çu l├á '...... cuß║ú c├íc hß╗ç ß╗⌐ng dß╗Ñng ─æß╗æi vß╗¢i sß╗▒ thay ─æß╗òi trong cß║Ñu tr├║c l╞░u trß╗» v├á chiß║┐n l╞░ß╗úc truy nhß║¡p dß╗» liß╗çu'?", opts:["Ph╞░╞íng thß╗⌐c truy nhß║¡p","C├íc chiß║┐n l╞░ß╗úc truy nhß║¡p","Nß╗Öi dung th├┤ng tin","T├¡nh tß║Ñt biß║┐n"], ans:3},
  {q:"Trong cß║Ñu tr├║c h├¼nh c├óy, khi sß╗¡a ─æß╗òi mß╗Öt sß╗æ th├┤ng tin trong c├íc bß║ún ghi phß╗Ñ thuß╗Öc th├¼ phß║úi duyß╗çt to├án bß╗Ö m├┤ h├¼nh, bß║▒ng c├ích d├▓ t├¼m trong tß╗½ng xuß║Ñt hiß╗çn. Dß║½n ─æß║┐n sß╗▒ xuß║Ñt hiß╗çn ...", opts:["To├án vß║╣n dß╗» liß╗çu trong l╞░u trß╗»","An to├án dß╗» liß╗çu","Tß╗òn thß║Ñt th├┤ng tin","Kh├┤ng nhß║Ñt qu├ín dß╗» liß╗çu trong l╞░u trß╗»"], ans:3},
  {q:"M├┤ h├¼nh dß╗» liß╗çu mß║íng l├á m├┤ h├¼nh thß╗▒c thß╗â quan hß╗ç, trong ─æ├│ c├íc mß╗æi li├¬n kß║┐t hß║ín chß║┐ ... kh├┤ng chß╗⌐a li├¬n kß║┐t nhi├¬u - nhiß╗üu.", opts:["T├¡nh ─æß╗æi xß╗⌐ng","Trong kiß╗âu mß╗Öt - mß╗Öt v├á nhiß╗üu - mß╗Öt","Trong kiß╗âu mß╗Öt bß║ún ghi li├¬n kß║┐t","Trong kiß╗âu mß╗Öt bß║ún ghi thß╗▒c thß╗â"], ans:1},
  {q:"T├¡nh ─æß╗Öc lß║¡p dß╗» liß╗çu trong c├íc hß╗ç c╞í sß╗ƒ dß╗» liß╗çu quan hß╗ç cao, thß╗â hiß╗çn cß║Ñu tr├║c l╞░u trß╗» v├á chiß║┐n l╞░ß╗úc truy nhß║¡p c├│ thß╗â ... nh╞░ng kh├┤ng thay ─æß╗òi s╞í ─æß╗ô quan niß╗çm v├á ng╞░ß╗úc lß║íi.", opts:["Thay ─æß╗òi","─Éß╗Öc lß║¡p lß║½n nhau","Kh├┤ng thay ─æß╗òi","Phß╗Ñ thuß╗Öc lß║½n nhau"], ans:0},
  {q:"Gi├í trß╗ï c├íc th├ánh phß║ºn cß╗ºa kho├í ...", opts:["C├│ thß╗â nhß║¡n gi├í trß╗ï null hay c├íc gi├í trß╗ï kh├┤ng x├íc ─æß╗ïnh","C├│ thß╗â nhß║¡n gi├í trß╗ï c├íc gi├í trß╗ï kh├┤ng x├íc ─æß╗ïnh","Kh├┤ng thß╗â nhß║¡n gi├í trß╗ï null v├á chß║Ñp nhß║¡n c├íc gi├í trß╗ï kh├┤ng x├íc ─æß╗ïnh","Kh├┤ng thß╗â nhß║¡n gi├í trß╗ï null hay c├íc gi├í trß╗ï kh├┤ng x├íc ─æß╗ïnh"], ans:3},
  {q:"N├│i rß║▒ng bß╗Ö t cß╗ºa quan hß╗ç R thoß║ú m├ún biß╗âu thß╗⌐c logic E, k├╜ hiß╗çu t(E) nß║┐u sau khi thay mß╗ìi gi├í trß╗ï cß╗ºa thuß╗Öc t├¡nh A trong E bß╗ƒi gi├í trß╗ï t[A] t╞░╞íng ß╗⌐ng th├¼ ...", opts:["Nhß║¡n ─æ╞░ß╗úc gi├í trß╗ï ─æa trß╗ï","Nhß║¡n ─æ╞░ß╗úc gi├í trß╗ï False","Nhß║¡n ─æ╞░ß╗úc gi├í trß╗ï ─æ╞ín trß╗ï","Nhß║¡n ─æ╞░ß╗úc gi├í trß╗ï True"], ans:3},
  {q:"Tß╗½ c├íc ph├⌐p to├ín ─æß║íi sß╗æ quan hß╗ç, mß╗Öt c├óu vß║Ñn tin c├│ thß╗â ─æ╞░ß╗úc biß╗âu diß╗àn bß╗ƒi ...", opts:["Mß╗Öt biß╗âu thß╗⌐c quan hß╗ç","Mß╗Öt c├óy quan hß╗ç","Biß╗âu thß╗⌐c quan hß╗ç v├á mß╗Öt c├óy ph├⌐p to├ín quan hß╗ç","Biß╗âu thß╗⌐c quan hß╗ç hay mß╗Öt c├óy quan hß╗ç"], ans:3},
  {q:"Nß║┐u trong c├óu lß╗çnh SELECT c├│ chß╗⌐a GROUP BY, hß╗ç thß╗æng sß║╜ ... v├á thß╗▒c hiß╗çn c├íc ph├⌐p gß╗Öp nh├│m.", opts:["Ph├ón hoß║ích quan hß╗ç th├ánh nhiß╗üu nh├│m t├ích biß╗çt nhau","Thß╗▒c hiß╗çn viß╗çc sß║»p xß║┐p theo chß╗ë dß║½n sau mß╗çnh ─æß╗ü ORDER BY","Thß╗▒c hiß╗çn ph├⌐p chß╗ìn sau mß╗çnh ─æß╗ü WHERE","Thß╗▒c hiß╗çn ph├⌐p chiß║┐u sau mß╗çnh ─æß╗ü SELECT"], ans:0},
  {q:"To├án vß║╣n dß╗» liß╗çu ngh─⌐a l├á?", opts:["C├│ thß╗â thß╗▒c hiß╗çn c├íc chiß║┐n l╞░ß╗úc truy nhß║¡p dß╗» liß╗çu","Dß╗» liß╗çu trong CSDL lu├┤n lu├┤n ch├¡nh x├íc tß║íi mß╗ìi thß╗¥i ─æiß╗âm","C├│ thß╗â t├¼m kiß║┐m tß║íi mß╗ìi thß╗¥i ─æiß╗âm","Bß║úo ─æß║úm t├¡nh ─æß╗Öc lß║¡p dß╗» liß╗çu tß║íi mß╗ìi thß╗¥i ─æiß╗âm"], ans:1},
  {q:"H├¼nh thß╗⌐c th├┤ng dß╗Ñng nhß║Ñt ─æß╗â nhß║¡n biß║┐t ng╞░ß╗¥i sß╗¡ dß╗Ñng l├á mß║¡t khß║⌐u ...", opts:["─Éß║úm bß║úo to├án vß║╣n dß╗» liß╗çu","Chß╗ë c├│ hß╗ç thß╗æng v├á ng╞░ß╗¥i sß╗¡ dß╗Ñng biß║┐t","Mß╗¢i ─æ╞░ß╗úc ph├⌐p truy nhß║¡p CSDL","V├á c├íc quy tß║»c bß║úo vß╗ç c╞í sß╗ƒ dß╗» liß╗çu"], ans:1},
  {q:"Cho quan hß╗ç R gß╗ôm c├íc thuß╗Öc t├¡nh: K# m├ú thu├¬ bao, TB t├¬n thu├¬ bao, SDT sß╗æ ─æiß╗çn thoß║íi, DC ─æß╗ïa chß╗ë. Chß╗ìn c├óu ─æ├║ng khi t├¡nh tß╗òng c├íc thu├¬ bao c├│ c├╣ng t├¬n l├á L├¬ Ngß╗ìc H├á?", opts:["SELECT COUNT(*) FROM R WHERE TB = 'L├¬ Ngß╗ìc H├á'","SELECT TB, DC FROM R WHERE TB = 'L├¬ Ngß╗ìc H├á'","SELECT * FROM R WHERE TB = 'L├¬ Ngß╗ìc H├á'","SELECT * FROM R WHERE TB = 'L├¬ Ngß╗ìc H├á' GROUP BY TB"], ans:0},
  {q:"Cho quan hß╗ç R gß╗ôm c├íc thuß╗Öc t├¡nh: K# m├ú thu├¬ bao, TB t├¬n thu├¬ bao, SDT sß╗æ ─æiß╗çn thoß║íi, DC ─æß╗ïa chß╗ë. Chß╗ìn c├óu ─æ├║ng khi t├¡nh tß╗òng c├│ bao nhi├¬u thu├¬ bao tr├¬n ─É╞░ß╗¥ng Nguyß╗àn Tr├úi?", opts:["SELECT * FROM R","SELECT * FROM R GROUP BY TB HAVING DC = '─É╞░ß╗¥ng Nguyß╗àn Tr├úi'","SELECT COUNT(*) FROM R WHERE DC = '─É╞░ß╗¥ng Nguyß╗àn Tr├úi'","SELECT * FROM R WHERE DC = '─É╞░ß╗¥ng Nguyß╗àn Tr├úi'"], ans:2},
  {q:"C╞í sß╗ƒ dß╗» liß╗çu l├á:", opts:["Mß╗Öt bß╗Ö s╞░u tß║¡p rß║Ñt lß╗¢n vß╗ü c├íc loß║íi dß╗» liß╗çu t├íc nghiß╗çp, l╞░u trß╗» theo quy tß║»c","Mß╗Öt bß╗Ö s╞░u tß║¡p rß║Ñt lß╗¢n vß╗ü c├íc loß║íi dß╗» liß╗çu t├íc nghiß╗çp","Tß║¡p c├íc File dß╗» liß╗çu t├íc nghiß╗çp","Kho dß╗» liß╗çu t├íc nghiß╗çp"], ans:0},
  {q:"C├íc loß║íi dß╗» liß╗çu bao gß╗ôm:", opts:["Tß║¡p c├íc File sß╗æ liß╗çu","├ém thanh, tiß║┐ng n├│i, chß╗» viß║┐t, v─ân bß║ún, ─æß╗ô hoß║í, h├¼nh ß║únh t─⌐nh, h├¼nh ß║únh ─æß╗Öng","├ém thanh, tiß║┐ng n├│i, chß╗» viß║┐t, v─ân bß║ún, ─æß╗ô hoß║í, h├¼nh ß║únh t─⌐nh hay h├¼nh ß║únh ─æß╗Öng d╞░ß╗¢i dß║íng nhß╗ï ph├ón","├ém thanh, tiß║┐ng n├│i, chß╗» viß║┐t, v─ân bß║ún, ─æß╗ô hoß║í, h├¼nh ß║únh t─⌐nh hay h├¼nh ß║únh ─æß╗Öng ─æ╞░ß╗úc l╞░u trß╗» trong c├íc bß╗Ö nhß╗¢"], ans:2},
  {q:"C╞í sß╗ƒ dß╗» liß╗çu l├á t├ái nguy├¬n th├┤ng tin chung, ngh─⌐a l├á:", opts:["Truy nhß║¡p trß╗▒c tuyß║┐n","Nhiß╗üu ng╞░ß╗¥i sß╗¡ dß╗Ñng, kh├┤ng phß╗Ñ thuß╗Öc vß╗ï tr├¡ ─æß╗ïa l├╜, c├│ ph├ón quyß╗ün","Nhiß╗üu ng╞░ß╗¥i sß╗¡ dß╗Ñng","Nhiß╗üu ng╞░ß╗¥i sß╗¡ dß╗Ñng, c├│ ph├ón quyß╗ün"], ans:1},
  {q:"Hß╗ç quß║ún trß╗ï CSDL - HQTCSDL (DataBase Management System - DBMS) l├á:", opts:["Hß╗ç ─æiß╗üu h├ánh","C├íc phß║ºn mß╗üm hß╗ç thß╗æng","Phß║ºn mß╗üm ─æiß╗üu khiß╗ân c├íc chiß║┐n l╞░ß╗úc truy nhß║¡p CSDL","C├íc phß║ºn mß╗üm ß╗⌐ng dß╗Ñng"], ans:2},
  {q:"Chß╗⌐c n─âng quan trß╗ìng cß╗ºa c├íc dß╗ïch vß╗Ñ c╞í sß╗ƒ dß╗» liß╗çu l├á:", opts:["Cß║¡p nhß║¡t, sß╗¡a ─æß╗òi, bß╗ò sung dß╗» liß╗çu","Kh├┤i phß╗Ñc th├┤ng tin","T├¼m kiß║┐m v├á tra cß╗⌐u th├┤ng tin","Xß╗¡ l├╜, t├¼m kiß║┐m, tra cß╗⌐u, sß╗¡a ─æß╗òi, bß╗ò sung hay loß║íi bß╗Å dß╗» liß╗çu"], ans:3},
  {q:"╞»u ─æiß╗âm c╞í sß╗ƒ dß╗» liß╗çu:", opts:["Xuß║Ñt hiß╗çn dß╗ï th╞░ß╗¥ng th├┤ng tin","C├íc thuß╗Öc t├¡nh ─æ╞░ß╗úc m├┤ tß║ú trong nhiß╗üu tß╗çp dß╗» liß╗çu kh├íc nhau","Khß║ú n─âng xuß║Ñt hiß╗çn m├óu thuß║½n v├á kh├┤ng nhß║Ñt qu├ín dß╗» liß╗çu","Giß║úm d╞░ thß╗½a, nhß║Ñt qu├ín v├á to├án vß║╣n cß╗ºa dß╗» liß╗çu"], ans:3},
  {q:"Dß╗ï th╞░ß╗¥ng th├┤ng tin c├│ thß╗â:", opts:["Thß╗½a thiß║┐u th├┤ng tin trong l╞░u trß╗»","Dß╗» liß╗çu nhß║Ñt qu├ín v├á to├án vß║╣n","Phß║ún ├ính ─æ├║ng hiß╗çn thß╗▒c kh├ích quan dß╗» liß╗çu","Kh├┤ng xuß║Ñt hiß╗çn m├óu thuß║½n th├┤ng tin"], ans:0},
  {q:"Kh├┤ng nhß║Ñt qu├ín dß╗» liß╗çu trong l╞░u trß╗»:", opts:["Kh├┤ng xuß║Ñt hiß╗çn m├óu thuß║½n th├┤ng tin","L├ám cho dß╗» liß╗çu mß║Ñt ─æi t├¡nh to├án vß║╣n cuß║ú n├│","Kh├┤ng thß╗â sß╗¡a ─æß╗òi, bß╗ò sung, cß║¡p nhß║¡t dß╗» liß╗çu","C├│ thß╗â triß╗ân khai tra cß╗⌐u t├¼m kiß║┐m"], ans:1},
  {q:"T├¡nh to├án vß║╣n dß╗» liß╗çu ─æß║úm bß║úo:", opts:["Cho sß╗▒ l╞░u trß╗» dß╗» liß╗çu lu├┤n lu├┤n ─æ├║ng","Phß║ún ├ính ─æ├║ng hiß╗çn thß╗▒c kh├ích quan dß╗» liß╗çu","Giß║úm d╞░ thß╗½a, nhß║Ñt qu├ín v├á to├án vß║╣n cß╗ºa dß╗» liß╗çu","Cho viß╗çc cß║¡p nhß║¡t, sß╗¡a ─æß╗òi, bß╗ò sung dß╗» liß╗çu thuß║¡n lß╗úi"], ans:1},
  {q:"An to├án dß╗» liß╗çu c├│ thß╗â hiß╗âu l├á:", opts:["Ng─ân chß║╖n c├íc truy nhß║¡p tr├íi ph├⌐p, sai quy ─æß╗ïnh tß╗½ trong ra hoß║╖c tß╗½ ngo├ái v├áo","T├¡nh nhß║Ñt qu├ín v├á to├án vß║╣n dß╗» liß╗çu","Dß╗à d├áng cho c├┤ng viß╗çc bß║úo tr├¼ dß╗» liß╗çu","Thß╗æng nhß║Ñt c├íc ti├¬u chuß║⌐n, thß╗º tß╗Ñc v├á c├íc biß╗çn ph├íp bß║úo vß╗ç, an to├án dß╗» liß╗çu"], ans:0},
  {q:"Thß╗⌐ tß╗▒ ─æ├║ng c├íc mß╗⌐c trong m├┤ h├¼nh kiß║┐n tr├║c c╞í sß╗ƒ dß╗» liß╗çu:", opts:["Mß╗⌐c ngo├ái, mß╗⌐c quan niß╗çm v├á mß╗⌐c m├┤ h├¼nh","Mß╗⌐c quan niß╗çm, mß╗⌐c trong v├á mß╗⌐c ngo├ái","Mß╗⌐c ngo├ái, mß╗⌐c quan niß╗çm v├á mß╗⌐c trong","Mß╗⌐c trong, mß╗⌐c m├┤ h├¼nh dß╗» liß╗çu v├á mß╗⌐c ngo├ái"], ans:2},
  {q:"Ng╞░ß╗¥i sß╗¡ dß╗Ñng c├│ thß╗â truy nhß║¡p:", opts:["Mß╗Öt phß║ºn c╞í sß╗ƒ dß╗» liß╗çu","Phß╗Ñ thuß╗Öc v├áo quyß╗ün truy nhß║¡p","To├án bß╗Ö c╞í sß╗ƒ dß╗» liß╗çu","Hß║ín chß║┐"], ans:1},
  {q:"C├ích nh├¼n c╞í sß╗ƒ dß╗» liß╗çu cß╗ºa ng╞░ß╗¥i sß╗¡ dß╗Ñng bß║▒ng:", opts:["M├┤ h├¼nh trong","M├┤ h├¼nh ngo├ái","M├┤ h├¼nh ngo├ái v├á m├┤ h├¼nh dß╗» liß╗çu","M├┤ h├¼nh dß╗» liß╗çu"], ans:1},
  {q:"M├┤ h├¼nh ngo├ái l├á:", opts:["Nß╗Öi dung th├┤ng tin cß╗ºa to├án bß╗Ö CSDL","Nß╗Öi dung th├┤ng tin cß╗ºa mß╗Öt phß║ºn dß╗» liß╗çu d╞░ß╗¢i c├ích nh├¼n cß╗ºa ng╞░ß╗¥i sß╗¡ dß╗Ñng","Nß╗Öi dung th├┤ng tin cß╗ºa to├án bß╗Ö CSDL d╞░ß╗¢i c├ích nh├¼n cß╗ºa ng╞░ß╗¥i sß╗¡ dß╗Ñng","Nß╗Öi dung th├┤ng tin cß╗ºa mß╗Öt phß║ºn c╞í sß╗ƒ dß╗» liß╗çu"], ans:1},
  {q:"M├┤ h├¼nh quan niß╗çm l├á:", opts:["C├ích nh├¼n dß╗» liß╗çu ß╗ƒ mß╗⌐c ngo├ái","Nß╗Öi dung th├┤ng tin cß╗ºa mß╗Öt phß║ºn dß╗» liß╗çu d╞░ß╗¢i c├ích nh├¼n cß╗ºa ng╞░ß╗¥i sß╗¡ dß╗Ñng","C├ích nh├¼n dß╗» liß╗çu mß╗Öt c├ích tß╗òng qu├ít cß╗ºa ng╞░ß╗¥i sß╗¡ dß╗Ñng","Nß╗Öi dung th├┤ng tin cß╗ºa mß╗Öt phß║ºn dß╗» liß╗çu"], ans:2},
  {q:"M├┤ h├¼nh trong l├á:", opts:["M├┤ h├¼nh biß╗âu diß╗àn c╞í sß╗ƒ dß╗» liß╗çu tr├¼u t╞░ß╗úng ß╗ƒ mß╗⌐c quan niß╗çm","C├│ nhiß╗üu c├ích biß╗âu diß╗àn CSDL d╞░ß╗¢i dß║íng l╞░u trß╗» vß║¡t l├╜","M├┤ h├¼nh l╞░u trß╗» vß║¡t l├╜ dß╗» liß╗çu","L├á mß╗Öt trong c├íc m├┤ h├¼nh biß╗âu diß╗àn CSDL d╞░ß╗¢i dß║íng l╞░u trß╗» vß║¡t l├╜"], ans:3},
  {q:"├ünh xß║í quan niß╗çm trong:", opts:["Bß║úo ─æß║úm t├¡nh ─æß╗Öc lß║¡p cß╗ºa dß╗» liß╗çu","Bß║úo ─æß║úm t├¡nh phß╗Ñ thuß╗Öc lß║½n nhau giß╗»a m├┤ h├¼nh trong v├á m├┤ h├¼nh ngo├ái","Bß║úo ─æß║úm cß║Ñu tr├║c l╞░u trß╗» cß╗ºa m├┤ h├¼nh dß╗» liß╗çu kh├┤ng thay ─æß╗òi","Bß║úo ─æß║úm cß║Ñu tr├║c l╞░u trß╗» cß╗ºa CSDL khi c├│ sß╗▒ thay ─æß╗òi"], ans:0},
  {q:"├ünh xß║í quan niß╗çm-ngo├ái:", opts:["Quan hß╗ç giß╗»a m├┤ h├¼nh ngo├ái v├á m├┤ h├¼nh ngo├ái","Quan hß╗ç giß╗»a m├┤ h├¼nh trong v├á m├┤ h├¼nh trong","Quan hß╗ç m├┤t-mß╗Öt giß╗»a m├┤ h├¼nh ngo├ái v├á m├┤ h├¼nh dß╗» liß╗çu","Quan hß╗ç giß╗»a m├┤ h├¼nh ngo├ái v├á m├┤ h├¼nh trong"], ans:3},
  {q:"Mß╗Ñc ti├¬u cß╗ºa c╞í sß╗ƒ dß╗» liß╗çu l├á:", opts:["Kh├┤ng l├ám thay ─æß╗òi chiß║┐n l╞░ß╗úc truy nhß║¡p c╞í sß╗ƒ dß╗» liß╗çu","Kh├┤ng l├ám thay ─æß╗òi cß║Ñu tr├║c l╞░u trß╗» dß╗» liß╗çu","Dß╗» liß╗çu chß╗ë ─æ╞░ß╗úc biß╗âu diß╗àn, m├┤ tß║ú mß╗Öt c├ích duy nhß║Ñt","Bß║úo ─æß║úm t├¡nh ─æß╗Öc lß║¡p dß╗» liß╗çu"], ans:3},
  {q:"Hß╗ç quß║ún trß╗ï CSDL DBMS (DataBase Management System) l├á:", opts:["─Éß║úm bß║úo an to├án, bß║úo mß║¡t dß╗» liß╗çu v├á t├¡nh to├án vß║╣n dß╗» liß╗çu","Tß║ío cß║Ñu tr├║c dß╗» liß╗çu t╞░╞íng ß╗⌐ng vß╗¢i m├┤ h├¼nh dß╗» liß╗çu","Hß╗ç thß╗æng phß║ºn mß╗üm ─æiß╗üu khiß╗ân c├íc chiß║┐n l╞░ß╗úc truy nhß║¡p v├á tß╗ò chß╗⌐c l╞░u trß╗» c╞í sß╗ƒ dß╗» liß╗çu","Cß║¡p nhß║¡t, ch├¿n th├¬m, loß║íi bß╗Å hay sß╗¡a ─æß╗òi dß╗» liß╗çu mß╗⌐c tß╗çp"], ans:2},
  {q:"M├┤ h├¼nh CSDL ph├ón cß║Ñp l├á m├┤ h├¼nh:", opts:["Dß╗» liß╗çu ─æ╞░ß╗úc biß╗âu diß╗àn bß║▒ng con trß╗Å","Dß╗» liß╗çu ─æ╞░ß╗úc biß╗âu diß╗àn bß║▒ng cß║Ñu tr├║c c├óy","Dß╗» liß╗çu ─æ╞░ß╗úc biß╗âu diß╗àn bß║▒ng mß╗æi quan hß╗ç thß╗▒c thß╗â","Dß╗» liß╗çu ─æ╞░ß╗úc biß╗âu diß╗àn bß║▒ng bß║úng"], ans:1},
  {q:"Trong m├┤ h├¼nh CSDL ph├ón cß║Ñp c├│ thß╗â:", opts:["Kh├┤ng c├│ bß║ún ghi gß╗æc","Tß╗ôn tß║íi c├íc loß║íi c├óy kh├┤ng chß╗⌐a gß╗æc v├á phß╗Ñ thuß╗Öc","C├íc bß║ún ghi phß╗Ñ thuß╗Öc chß╗ë tß╗ôn tß║íi khi v├á chß╗ë khi tß╗ôn tß║íi bß║ún ghi gß╗æc","Tß╗ôn tß║íi c├íc loß║íi c├óy chß╗ë c├│ c├íc bß║ún ghi phß╗Ñ thuß╗Öc"], ans:2},
  {q:"─Éiß╗üu g├¼ sß║╜ xß║⌐y ra khi loß║íi bß╗Å bß║ún ghi gß╗æc duy nhß║Ñt trong mß╗Öt c├óy?", opts:["M├óu thuß║½n th├┤ng tin","D╞░ thß╗½a th├┤ng tin","Kh├┤ng to├án vß║╣n dß╗» liß╗çu","Mß║Ñt th├┤ng tin"], ans:3},
  {q:"Mß║Ñt th├┤ng tin khi xo├í bß║ún ghi phß╗Ñ thuß╗Öc trong tr╞░ß╗¥ng hß╗úp:", opts:["Xo├í bß║ún ghi gß╗æc","Xo├í tß║Ñt cß║ú c├íc bß║ún ghi phß╗Ñ thuß╗Öc","Xo├í cß║Ñu tr├║c c├óy ph├ón cß║Ñp","Xo├í bß║ún ghi phß╗Ñ thuß╗Öc duy nhß║Ñt"], ans:3},
  {q:"T├¼m kiß║┐m th├┤ng tin trong CSDL ph├ón cß║Ñp:", opts:["CSDL ph├ón cß║Ñp c├áng lß╗¢n th├¼ t├¼m kiß║┐m c├áng phß╗⌐c tß║íp","─É╞ín giß║ún, tiß╗çn lß╗úi","Dß╗à thao t├íc, dß╗à sß╗¡ dß╗Ñng","Nhanh ch├│ng, ch├¡nh x├íc"], ans:0},
  {q:"Trong m├┤ h├¼nh ph├ón cß║Ñp dß╗» liß╗çu ─æ╞░ß╗úc biß╗âu diß╗àn:", opts:["Trong mß╗ùi mß╗Öt c├óy, mß╗Öt bß║ún gß╗æc v├á bß║ún ghi phß╗Ñ thuß╗Öc","Trong mß╗Öt tß╗çp duy nhß║Ñt theo cß║Ñu tr├║c c├óy","Trong nhiß╗üu c├óy","Trong nhiß╗üu tß╗çp theo cß║Ñu tr├║c c├óy"], ans:3},
  {q:"Khi thao t├íc bß║▒ng ng├┤n ngß╗» thao t├íc dß╗» liß╗çu tr├¬n CSDL ph├ón cß║Ñp:", opts:["C├│ nhiß╗üu khß║ú n─âng xß║⌐y ra dß╗ï th╞░ß╗¥ng th├┤ng tin","─Éß║úm bß║úo t├¡nh to├án vß║╣n cß╗ºa dß╗» liß╗çu","─Éß║úm bß║úo t├¡nh ─æß╗Öc lß║¡p cß╗ºa dß╗» liß╗çu","─Éß║úm bß║úo t├¡nh ß╗òn ─æß╗ïnh"], ans:0},
  {q:"─Éß║╖c tr╞░ng cß║Ñu tr├║c cß╗ºa m├┤ h├¼nh mß║íng l├á:", opts:["Chß╗⌐a c├íc li├¬n kß║┐t mß╗Öt - mß╗Öt v├á mß╗Öt - nhiß╗üu","Chß╗⌐a c├íc li├¬n kß║┐t mß╗Öt - mß╗Öt, mß╗Öt - nhiß╗üu v├á nhiß╗üu - nhiß╗üu","Chß╗⌐a c├íc li├¬n kß║┐t mß╗Öt - mß╗Öt, mß╗Öt - nhiß╗üu v├á nhiß╗üu - nhiß╗üu","Chß╗⌐a c├íc li├¬n kß║┐t nhiß╗üu - mß╗Öt v├á mß╗Öt - nhiß╗üu"], ans:1},
  {q:"Biß╗âu diß╗àn dß╗» liß╗çu trong m├┤ h├¼nh CSDL mß║íng:", opts:["Bß║▒ng c├íc bß║úng 2 chiß╗üu","C├íc mß╗æi nß╗æi li├¬n kß║┐t giß╗»a c├íc bß║ún ghi, tß║ío th├ánh mß╗Öt ─æß╗ô thß╗ï c├│ h╞░ß╗¢ng","Bß║▒ng c├íc k├╜ hiß╗çu biß╗âu diß╗àn","C├íc mß╗æi nß╗æi li├¬n kß║┐t giß╗»a c├íc bß║ún ghi theo cß║Ñu tr├║c c├óy"], ans:1},
  {q:"Trong CSDL mß║íng, khi th├¬m c├íc bß║ún ghi mß╗¢i:", opts:["M├óu thuß║½n th├┤ng tin","D╞░ thß╗½a th├┤ng tin","─Éß║úm bß║úo ─æ╞░ß╗úc t├¡nh nhß║Ñt qu├ín v├á t├¡nh to├án vß║╣n cß╗ºa dß╗» liß╗çu","Kh├┤ng ─æß║úm bß║úo t├¡nh nhß║Ñt qu├ín v├á to├án vß║╣n cß╗ºa dß╗» liß╗çu"], ans:3},
  {q:"Ng╞░ß╗¥i quß║ún trß╗ï CSDL l├á:", opts:["Quyß║┐t ─æß╗ïnh cß║Ñu tr├║c l╞░u trß╗» & chiß║┐n l╞░ß╗úc truy nhß║¡p","X├íc ─æß╗ïnh chiß║┐n l╞░ß╗úc l╞░u trß╗», sao ch├⌐p, phß╗Ñc hß╗ôi dß╗» liß╗çu","Cho ph├⌐p ng╞░ß╗¥i sß╗¡ dß╗Ñng nhß╗»ng quyß╗ün truy nhß║¡p c╞í sß╗ƒ dß╗» liß╗çu","Mß╗Öt ng╞░ß╗¥i hay mß╗Öt nh├│m ng╞░ß╗¥i c├│ khß║ú n─âng chuy├¬n m├┤n cao vß╗ü tin hß╗ìc, c├│ tr├ích nhiß╗çm quß║ún l├╜ v├á ─æiß╗üu khiß╗ân to├án bß╗Ö hoß║ít ─æß╗Öng cß╗ºa c├íc hß╗ç CSDL"], ans:3},
  {q:"R├áng buß╗Öc dß╗» liß╗çu:", opts:["C├íc ─æß╗ïnh ngh─⌐a, ti├¬n ─æß╗ü, ─æß╗ïnh l├╜","Quy tß║»c biß╗âu diß╗àn cß║Ñu tr├║c dß╗» liß╗çu","Mß╗æi quan hß╗ç giß╗»a c├íc thß╗▒c thß╗â dß╗» liß╗çu","C├íc quy tß║»c, quy ─æß╗ïnh"], ans:3},
  {q:"R├áng buß╗Öc kiß╗âu:", opts:["Quy tß║»c ─æß║╖t t├¬n c╞í sß╗ƒ dß╗» liß╗çu","M├┤ tß║ú t├¡nh chß║Ñt cß╗ºa c├íc thuß╗Öc t├¡nh khi tß║ío lß║¡p CSDL","Quy tß║»c truy nhß║¡p c╞í sß╗ƒ dß╗» liß╗çu","Mß╗æi quan hß╗ç giß╗»a c├íc thß╗▒c thß╗â dß╗» liß╗çu"], ans:1},
  {q:"R├áng buß╗Öc giß║úi t├¡ch:", opts:["Mß╗æi quan hß╗ç giß╗»a c├íc thuß╗Öc t├¡nh ─æ╞░ß╗úc biß╗âu diß╗àn bß║▒ng c├íc biß╗âu thß╗⌐c to├ín hß╗ìc","Quy tß║»c biß╗âu diß╗àn cß║Ñu tr├║c dß╗» liß╗çu","C├íc ph├⌐p to├ín ─æß║íi sß╗æ quan hß╗ç","M├┤ tß║ú t├¡nh chß║Ñt cß╗ºa c├íc thuß╗Öc t├¡nh khi tß║ío lß║¡p CSDL"], ans:0},
  {q:"R├áng buß╗Öc logic:", opts:["C├íc ph├⌐p so s├ính","Mß╗æi quan hß╗ç giß╗»a c├íc thuß╗Öc t├¡nh ─æ╞░ß╗úc biß╗âu diß╗àn bß║▒ng c├íc biß╗âu thß╗⌐c to├ín hß╗ìc","Mß╗æi quan hß╗ç giß╗»a c├íc thuß╗Öc t├¡nh ─æ╞░ß╗úc biß╗âu diß╗àn bß║▒ng c├íc phß╗Ñ thuß╗Öc h├ám","C├íc ph├⌐p to├ín quan hß╗ç"], ans:2},
  {q:"M├┤ h├¼nh c╞í sß╗ƒ dß╗» liß╗çu Client-Server:", opts:["M├íy chß╗º v├á m├íy ─æß╗üu tham gia qu├í tr├¼nh xß╗¡ l├╜","M├íy kh├ích thß╗▒c hiß╗çn c├íc ß╗⌐ng dß╗Ñng, n├│ gß╗¡i y├¬u cß║ºu vß╗ü m├íy chß╗º ─æ╞░ß╗úc kß║┐t nß╗æi vß╗¢i c╞í sß╗ƒ dß╗» liß╗çu, m├íy chß╗º xß╗¡ l├╜ v├á gß╗¡i trß║ú lß║íi kß║┐t quß║ú vß╗ü m├íy kh├ích","M├íy kh├ích y├¬u cß║ºu m├íy chß╗º cung cß║Ñp c├íc loß║íi dß╗ïch vß╗Ñ","C├íc m├íy kh├ích chia sß║╗ g├ính nß║╖ng xß╗¡ l├╜ cß╗ºa m├íy chß╗º trung t├óm"], ans:1},
  {q:"─Éß║╖c tr╞░ng cß╗ºa mß╗Öt m├┤ h├¼nh dß╗» liß╗çu:", opts:["M├┤ h├¼nh dß╗» liß╗çu ─æ╞ín giß║ún","Biß╗âu diß╗àn dß╗» liß╗çu ─æ╞ín giß║ún v├á kh├┤ng cß║Ñu tr├║c","T├¡nh ß╗òn ─æß╗ïnh, t├¡nh ─æ╞ín giß║ún, cß║ºn phß║úi kiß╗âm tra d╞░ thß╗½a, ─æß╗æi xß╗⌐ng v├á c├│ c╞í sß╗ƒ l├╜ thuyß║┐t vß╗»ng chß║»c","Ng╞░ß╗¥i sß╗¡ dß╗Ñng c├│ quyß╗ün truy nhß║¡p tß║íi mß╗ìi l├║c, mß╗ìi n╞íi"], ans:2},
  {q:"M├┤ h├¼nh dß╗» liß╗çu tß╗æt nhß║Ñt:", opts:["Khi thao t├íc dß╗à d├áng nhß║Ñt","Kh├┤ng tß╗òn thß║Ñt th├┤ng tin","Phß╗Ñ thuß╗Öc v├áo y├¬u cß║ºu truy xuß║Ñt v├á khai th├íc th├┤ng tin","─Éß╗Öc lß║¡p dß╗» liß╗çu"], ans:2},
  {q:"M├┤ h├¼nh dß╗» liß╗çu n├áo c├│ khß║ú n─âng hß║ín chß║┐ sß╗▒ d╞░ thß╗½a dß╗» liß╗çu tß╗æt h╞ín?", opts:["Tß║Ñt cß║ú c├íc loß║íi m├┤ h├¼nh dß╗» liß╗çu","M├┤ h├¼nh dß╗» liß╗çu h╞░ß╗¢ng ─æß╗æi t╞░ß╗úng","M├┤ h├¼nh c╞í sß╗ƒ dß╗» liß╗çu ph├ón cß║Ñp","M├┤ h├¼nh c╞í sß╗ƒ dß╗» liß╗çu ph├ón t├ín"], ans:1},
  {q:"M├┤ h├¼nh dß╗» liß╗çu n├áo kh├┤ng chß║Ñp nhß║¡n mß╗æi quan hß╗ç nhiß╗üu - nhiß╗üu?", opts:["M├┤ h├¼nh dß╗» liß╗çu mß║íng","C╞í sß╗ƒ dß╗» liß╗çu ph├ón cß║Ñp","Tß║Ñt cß║ú c├íc m├┤ h├¼nh dß╗» liß╗çu","C╞í sß╗ƒ dß╗» liß╗çu ph├ón t├ín"], ans:1},
  {q:"Trong CSDL mß║íng, khi xo├í c├íc bß║ún ghi:", opts:["Kh├┤ng to├án vß║╣n dß╗» liß╗çu","L├ám mß║Ñt th├┤ng tin","M├óu thuß║½n th├┤ng tin sß║╜ xuß║Ñt hiß╗çn","─Éß║úm bß║úo ─æ╞░ß╗úc t├¡nh nhß║Ñt qu├ín v├á t├¡nh to├án vß║╣n cß╗ºa dß╗» liß╗çu"], ans:3},
  {q:"Trong CSDL mß║íng, khi thß╗▒c hiß╗çn c├íc ph├⌐p sß╗¡a ─æß╗òi nß╗Öi dung dß╗» liß╗çu:", opts:["─Éß║úm bß║úo t├¡nh to├án vß║╣n dß╗» liß╗çu","Kh├┤ng d╞░ thß╗½a th├┤ng tin","L├ám xuß║Ñt hiß╗çn m├óu thuß║½n dß╗» liß╗çu","Kh├┤ng l├ám xuß║Ñt hiß╗çn m├óu thuß║½n dß╗» liß╗çu"], ans:2},
  {q:"Trong CSDL mß║íng, khi thß╗▒c hiß╗çn c├íc ph├⌐p t├¼m kiß║┐m:", opts:["C├óu hß╗Åi v├á kß║┐t quß║ú c├íc c├óu hß╗Åi t├¼m kiß║┐m kh├┤ng ─æß╗æi xß╗⌐ng vß╗¢i nhau","CSDL c├áng lß╗¢n th├¼ t├¼m kiß║┐m c├áng phß╗⌐c tß║íp","C├óu hß╗Åi v├á kß║┐t quß║ú c├íc c├óu hß╗Åi t├¼m kiß║┐m th╞░ß╗¥ng ─æß╗æi xß╗⌐ng vß╗¢i nhau","Kh├┤ng phß╗⌐c tß║íp"], ans:0},
  {q:"Cß║Ñu tr├║c dß╗» liß╗çu trong m├┤ h├¼nh CSDL mß║íng:", opts:["Qu├í phß╗⌐c tß║íp v├¼ qu├í nhiß╗üu li├¬n kß║┐t giß╗»a c├íc thß╗▒c thß╗â","Chß╗⌐a 2 thß╗▒c thß╗â","Qu├í phß╗⌐c tß║íp v├¼ qu├í nhiß╗üu c├íc thß╗▒c thß╗â","Chß╗⌐a n thß╗▒c thß╗â"], ans:0},
  {q:"Trong m├┤ h├¼nh c╞í sß╗ƒ dß╗» liß╗çu quan hß╗ç:", opts:["Thß╗⌐ tß╗▒ cß╗ºa c├íc cß╗Öt l├á quan trß╗ìng","Thß╗⌐ tß╗▒ cß╗ºa c├íc cß╗Öt l├á kh├┤ng quan trß╗ìng","Thß╗⌐ tß╗▒ cß╗ºa c├íc h├áng l├á kh├┤ng quan trß╗ìng","Thß╗⌐ tß╗▒ cß╗ºa c├íc h├áng l├á quan trß╗ìng"], ans:1},
  {q:"Cß║Ñu tr├║c dß╗» liß╗çu quan hß╗ç l├á:", opts:["Li├¬n kß║┐t giß╗»a c├íc bß╗Ö ─æ╞░ß╗úc biß╗âu diß╗àn duy nhß║Ñt bß║▒ng c├íc gi├í trß╗ï trong c├íc cß╗Öt","Mß╗æi li├¬n kß║┐t giß╗»a c├íc bß╗Ö","Mß╗æi li├¬n kß║┐t h├¼nh x├óy","Mß╗æi li├¬n kß║┐t giß╗»a c├íc cß╗Öt"], ans:0},
  {q:"Dß╗» liß╗çu trong m├┤ h├¼nh quan hß╗ç:", opts:["─É╞░ß╗úc biß╗âu diß╗àn theo cß║Ñu tr├║c h├¼nh c├óy","─É╞░ß╗úc biß╗âu diß╗àn mß╗Öt c├ích duy nhß║Ñt","─É╞░ß╗úc biß╗âu diß╗àn theo cß║Ñu tr├║c m├┤ h├¼nh mß║íng","─É╞░ß╗úc biß╗âu diß╗àn nhiß╗üu kiß╗âu kh├íc nhau"], ans:1},
  {q:"Ng├┤n ngß╗» thao t├íc dß╗» liß╗çu:", opts:["L├á c├íc ph├⌐p to├ín ─æ╞░ß╗úc x├óy dß╗▒ng tr├¬n ─æß║íi sß╗æ quan hß╗ç","L├á c├íc ph├⌐p ch├¿n th├¬m, sß╗¡a ─æß╗òi v├á loß║íi bß╗Å","L├á c├íc ph├⌐p to├ín sß╗æ hß╗ìc","L├á c├íc ph├⌐p to├ín: hß╗úp, giao, trß╗½..."], ans:0},
  {q:"Khi thß╗▒c hiß╗çn c├íc ph├⌐p l╞░u trß╗» tr├¬n quan hß╗ç:", opts:["Dß╗ï th╞░ß╗¥ng th├┤ng tin, kh├┤ng bß║úo ─æß║úm ─æ╞░ß╗úc t├¡nh to├án vß║╣n dß╗» liß╗çu","Kh├┤ng dß╗ï th╞░ß╗¥ng th├┤ng tin, bß║úo ─æß║úm ─æ╞░ß╗úc t├¡nh to├án vß║╣n dß╗» liß╗çu","Dß╗ï th╞░ß╗¥ng th├┤ng tin, kh├┤ng bß║úo ─æß║úm ─æ╞░ß╗úc viß╗çc thß╗▒c hiß╗çn truy vß║Ñn dß╗» liß╗çu","Kh├┤ng dß╗ï th╞░ß╗¥ng th├┤ng tin, l├á bß║úo ─æß║úm ─æ╞░ß╗úc t├¡nh ─æß╗Öc lß║¡p dß╗» liß╗çu"], ans:1},
  {q:"Kß║┐t quß║ú cß╗ºa c├íc thao t├íc dß╗» liß╗çu l├á:", opts:["Mß╗Öt biß╗âu thß╗⌐c","Mß╗Öt File","Mß╗Öt quan hß╗ç","Nhiß╗üu quan hß╗ç"], ans:2},
  {q:"Ng├┤n ngß╗» thao t├íc dß╗» liß╗çu quan hß╗ç:", opts:["Kh├┤ng to├án vß║╣n dß╗» liß╗çu","─É╞ín giß║ún nh╞░ng kh├┤ng tiß╗çn lß╗úi cho ng╞░ß╗¥i sß╗¡ dß╗Ñng","Phß╗⌐c tß║íp, tß╗òn thß║Ñt th├┤ng tin","─É╞ín giß║ún v├á thuß║¡n tiß╗çn cho ng╞░ß╗¥i sß╗¡ dß╗Ñng"], ans:3},
  {q:"M├┤ h├¼nh thß╗▒c thß╗â quan hß╗ç cho ph├⌐p m├┤ tß║ú:", opts:["Bß╗Ö s╞░u tß║¡p c├íc loß║íi dß╗» liß╗çu cß╗ºa mß╗Öt tß╗ò chß╗⌐c","Cß║Ñu tr├║c hß╗ç thß╗æng c╞í sß╗ƒ dß╗» liß╗çu","Hß╗ç thß╗æng th├┤ng tin quß║ún l├╜ cß╗ºa tß╗ò chß╗⌐c","L╞░ß╗úc ─æß╗ô kh├íi niß╗çm cß╗ºa mß╗Öt tß╗ò chß╗⌐c"], ans:3},
  {q:"M├┤ h├¼nh thß╗▒c thß╗â - quan hß╗ç c╞í bß║ún bao gß╗ôm c├íc lß╗¢p ─æß╗æi t╞░ß╗úng:", opts:["Thß╗▒c thß╗â v├á thuß╗Öc t├¡nh","M├┤i tr╞░ß╗¥ng v├á ranh giß╗¢i m├┤i tr╞░ß╗¥ng","Thß╗▒c thß╗â, mß╗æi quan hß╗ç v├á thuß╗Öc t├¡nh","C├íc mß╗æi quan hß╗ç"], ans:2},
  {q:"Thß╗▒c thß╗â l├á:", opts:["C├íc ─æß╗æi t╞░ß╗úng v├á mß╗æi li├¬n kß║┐t giß╗»a c├íc ─æß╗æi t╞░ß╗úng","C├íc ─æß╗æi t╞░ß╗úng dß╗» liß╗çu","C├íc mß╗æi li├¬n kß║┐t giß╗»a c├íc ─æß╗æi t╞░ß╗úng","C├íc quan hß╗ç"], ans:1},
  {q:"Trong biß╗âu thß╗⌐c quan hß╗ç c├íc to├ín hß║íng l├á:", opts:["C├íc phß║ºn tß╗¡","C├íc phß╗Ñ thuß╗Öc h├ám","C├íc thuß╗Öc t├¡nh","C├íc quan hß╗ç trong mß╗Öt CSDL"], ans:3},
  {q:"Khi thß╗▒c hiß╗çn c├íc ph├⌐p to├ín trong mß╗Öt biß╗âu thß╗⌐c quan hß╗ç, thß╗⌐ tß╗▒ ╞░u ti├¬n l├á:", opts:["Ph├⌐p kß║┐t nß╗æi ─æ╞░ß╗úc ╞░u ti├¬n h╞ín so vß╗¢i ph├⌐p chß╗ìn v├á chiß║┐u","C├íc ph├⌐p to├ín mß╗Öt ng├┤i c├│ thß╗⌐ tß╗▒ ╞░u ti├¬n cao h╞ín so vß╗¢i ph├⌐p to├ín hai ng├┤i","Phß╗Ñ thuß╗Öc v├áo vß╗ï tr├¡ cß╗ºa c├íc ph├⌐p to├ín","Ph├⌐p kß║┐t nß╗æi ─æ╞░ß╗úc ╞░u ti├¬n h╞ín so vß╗¢i ph├⌐p hß╗úp, ph├⌐p giao"], ans:1},
  {q:"Quy tß║»c gia t─âng trong hß╗ç ti├¬n ─æß╗ü Armstrong:", opts:["Nß║┐u A -> B => B -> A","Nß║┐u A -> B => A -> BC","Nß║┐u A -> B => BC -> A","Nß║┐u A -> B => AC -> B"], ans:3},
  {q:"Quy tß║»c bß║»c cß║ºu trong hß╗ç ti├¬n ─æß╗ü Armstrong:", opts:["Nß║┐u A -> B v├á B -> C => A -> C","Nß║┐u A -> B v├á B -> C => AC -> B","Nß║┐u A -> B v├á B -> C => AB -> C","Nß║┐u A -> B v├á B -> C => AC -> BC"], ans:0},
  {q:"Nß║┐u A -> B v├á A -> C th├¼ suy ra:", opts:["AA -> C","A -> AB","A -> BC","AB -> BC"], ans:2},
  {q:"Nß║┐u A -> BC suy ra:", opts:["AC -> B v├á A -> CC","A -> C","A -> B v├á A -> C","A -> B"], ans:2},
  {q:"F = {A -> B, C -> X, BX -> Z}, khi ─æ├│:", opts:["AB -> C Thuß╗Öc F+","A -> Z Thuß╗Öc F+","CB -> Z Thuß╗Öc F+","AC -> Z Thuß╗Öc F+"], ans:3},
  {q:"Tß╗æi ╞░u theo ngh─⌐a biß║┐n ─æß╗òi mß╗Öt biß╗âu thß╗⌐c ─æß║íi sß╗æ quan hß╗ç:", opts:["Cho c├╣ng mß╗Öt kß║┐t quß║ú vß╗¢i chi ph├¡ thß╗¥i gian thß╗▒c hiß╗çn v├á sß╗¡ dß╗Ñng bß╗Ö nhß╗¢ ├¡t h╞ín","Cho c├╣ng mß╗Öt kß║┐t quß║ú, kh├┤ng tß╗òn thß║Ñt th├┤ng tin","Vß╗¢i chi ph├¡ thß╗¥i gian ├¡t h╞ín rß║Ñt nhiß╗üu","Cho c├╣ng mß╗Öt kß║┐t quß║ú vß╗¢i chi ph├¡ bß╗Ö nhß╗¢ kh├┤ng nhiß╗üu"], ans:0},
  {q:"Trong SQL, ng├┤n ngß╗» thao t├íc dß╗» liß╗çu DML bao gß╗ôm c├íc chß╗⌐c n─âng:", opts:["Truy vß║Ñn th├┤ng tin, th├¬m, sß╗¡a, xo├í dß╗» liß╗çu","Bß║úo mß║¡t v├á quyß╗ün truy nhß║¡p","Tß║ío, sß╗¡a v├á x├│a cß║Ñu tr├║c quan hß╗ç","Tß║ío, sß╗¡a v├á x├│a cß║Ñu tr├║c v├á ─æß║úm bß║úo bß║úo mß║¡t v├á quyß╗ün truy nhß║¡p"], ans:0},
  {q:"Phß╗Ñ thuß╗Öc n├áo sau ─æ├óy l├á phß╗Ñ thuß╗Öc ─æß║ºy ─æß╗º:", opts:["(Sß╗æ thß╗⌐ tß╗▒, m├ú lß╗¢p) -> Hß╗ì t├¬n sinh vi├¬n","(Sß╗æ chß╗⌐ng minh th╞░, m├ú nh├ón vi├¬n) -> Qu├í tr├¼nh c├┤ng t├íc","(Sß╗æ ho├í ─æ╞ín, m├ú kh├ích h├áng) -> Hß╗ì t├¬n kh├ích h├áng","(M├ú b├ío, m├ú kh├ích h├áng) -> Gi├í b├ío"], ans:3},
  {q:"Gi├í trß╗ï c├íc th├ánh phß║ºn cß╗ºa kho├í quy ─æß╗ïnh:", opts:["C├│ thß╗â nhß║¡n gi├í trß╗ï null","Kh├┤ng thß╗â nhß║¡n gi├í trß╗ï null hay c├íc gi├í trß╗ï kh├┤ng x├íc ─æß╗ïnh","C├│ thß╗â nhß║¡n gi├í trß╗ï null hay c├íc gi├í trß╗ï kh├┤ng x├íc ─æß╗ïnh","Kh├┤ng thß╗â nhß║¡n gi├í trß╗ï null nh╞░ng c├│ thß╗â nhß║¡n c├íc gi├í trß╗ï kh├┤ng x├íc ─æß╗ïnh"], ans:1},
  {q:"C├íc thuß╗Öc t├¡nh kh├│a l├á:", opts:["C├íc thuß╗Öc t├¡nh kh├┤ng ─æ╞░ß╗úc chß╗⌐a trong kh├│a","C├íc thuß╗Öc t├¡nh kho├í","C├íc thuß╗Öc t├¡nh kh├┤ng kh├│a","C├íc phß║ºn tß╗¡ cß╗ºa kh├│a"], ans:3},
  {q:"Mß╗Ñc ti├¬u cß╗ºa c╞í sß╗ƒ dß╗» liß╗çu l├á:", opts:["T├¡nh to├án vß║╣n cß╗ºa dß╗» liß╗çu","Phß║ún ├ính trung thß╗▒c thß║┐ giß╗¢i hiß╗çn thß╗▒c dß╗» liß╗çu","T├¡nh ─æß╗Öc lß║¡p cß╗ºa dß╗» liß╗çu","T├¡nh phß╗Ñ thuß╗Öc dß╗» liß╗çu"], ans:2},
  {q:"Qu├í tr├¼nh t├ích kh├┤ng l├ám tß╗òn thß║Ñt th├┤ng tin theo ngh─⌐a:", opts:["Quan hß╗ç gß╗æc ─æ╞░ß╗úc kh├┤i phß╗Ñc tß╗½ c├íc quan hß╗ç chiß║┐u bß║▒ng ph├⌐p kß║┐t nß╗æi tß╗▒ nhi├¬n","Quan hß╗ç gß╗æc ─æ╞░ß╗úc kh├┤i phß╗Ñc ch├¡nh x├íc tß╗½ c├íc quan hß╗ç chiß║┐u","Quan hß╗ç gß╗æc ─æ╞░ß╗úc kh├┤i phß╗Ñc tß╗½ c├íc quan hß╗ç chiß║┐u bß║▒ng ph├⌐p kß║┐t nß╗æi","Quan hß╗ç gß╗æc ─æ╞░ß╗úc kh├┤i phß╗Ñc tß╗½ c├íc quan hß╗ç chiß║┐u bß║▒ng ph├⌐p chiß║┐u v├á chß╗ìn"], ans:0},
  {q:"╧å[╬⌐1, ╬⌐2..╬⌐p] l├á ph├⌐p t├ích - kß║┐t nß╗æi tß╗▒ nhi├¬n cß╗ºa l╞░ß╗úc ─æß╗ô quan hß╗ç nß║┐u:", opts:["Kß║┐t nß╗æi tß╗▒ nhi├¬n c├íc quan hß╗ç chiß║┐u","╧å[╬⌐1, ╬⌐2..╬⌐p] l├á mß╗Öt ph├⌐p t├ích v├á kß║┐t nß╗æi c├íc quan hß╗ç chiß║┐u","╧å[╬⌐1, ╬⌐2..╬⌐p] l├á mß╗Öt ph├⌐p t├ích v├á kß║┐t nß╗æi tß╗▒ nhi├¬n c├íc quan hß╗ç chiß║┐u","Kß║┐t nß╗æi cß╗ºa c├íc quan hß╗ç chiß║┐u"], ans:2},
  {q:"╧å[╬⌐1, ╬⌐2..╬⌐p] l├á ph├⌐p t├ích kh├┤ng tß╗òn thß║Ñt th├┤ng tin, nß║┐u:", opts:["Kß║┐t quß║ú kß║┐t nß╗æi tß╗▒ nhi├¬n c├íc quan hß╗ç chiß║┐u chß╗⌐a quan hß╗ç gß╗æc","Kß║┐t quß║ú kß║┐t nß╗æi tß╗▒ nhi├¬n c├íc quan hß╗ç chiß║┐u ch├¡nh l├á quan hß╗ç gß╗æc","Kß║┐t quß║ú kß║┐t nß╗æi tß╗▒ nhi├¬n c├íc quan hß╗ç chiß║┐u ─æ╞░ß╗úc chß╗⌐a trong quan hß╗ç gß╗æc","Kß║┐t quß║ú kß║┐t nß╗æi c├íc quan hß╗ç chiß║┐u tr├¬n mß╗Öt sß╗æ thuß╗Öc t├¡nh cß╗ºa quan hß╗ç gß╗æc"], ans:1},
  {q:"Mß╗Ñc ti├¬u cß╗ºa ph├⌐p t├ích l╞░ß╗úc ─æß╗ô quan hß╗ç l├á:", opts:["Nhß║▒m thß╗▒c hiß╗çn c├íc ph├⌐p l╞░u trß╗» dß╗à d├áng","Nhß║▒m tß╗æi ╞░u ho├í truy vß║Ñn","Nhß║▒m loß║íi bß╗Å c├íc dß╗ï th╞░ß╗¥ng th├┤ng tin khi thß╗▒c hiß╗çn c├íc ph├⌐p l╞░u trß╗»","Nhß║▒m thß╗▒c hiß╗çn c├íc ph├⌐p t├¼m kiß║┐m"], ans:2},
  {q:"Cß║ºn thiß║┐t phß║úi chuß║⌐n ho├í dß╗» liß╗çu v├¼:", opts:["Gi├í trß╗ï kho├í nhß║¡n gi├í trß╗ï null hay gi├í trß╗ï kh├┤ng x├íc ─æß╗ïnh","Khi thß╗▒c hiß╗çn c├íc ph├⌐p l╞░u trß╗» tr├¬n c├íc quan hß╗ç ch╞░a ─æ╞░ß╗úc chuß║⌐n ho├í th╞░ß╗¥ng xuß║Ñt hiß╗çn c├íc dß╗ï th╞░ß╗¥ng th├┤ng tin","Khi thß╗▒c hiß╗çn c├íc ph├⌐p t├ích - kß║┐t nß╗æi tß╗▒ nhi├¬n c├íc quan hß╗ç","Khi thß╗▒c hiß╗çn c├íc ph├⌐p t├¼m kiß║┐m, xuß║Ñt hiß╗çn c├íc dß╗ï th╞░ß╗¥ng th├┤ng tin"], ans:1},
  {q:"Dß╗ï th╞░ß╗¥ng th├┤ng tin l├á nguy├¬n nh├ón:", opts:["G├óy cß║ún trß╗ƒ cho viß╗çc cß║¡p nhß║¡t, bß╗ò sung th├┤ng tin","G├óy cß║ún trß╗ƒ cho viß╗çc t├ích kß║┐t nß╗æi tß╗òn thß║Ñt th├┤ng tin","G├óy cß║ún trß╗ƒ cho viß╗çc t├¼m kiß║┐m, hß╗Åi ─æ├íp th├┤ng tin","G├óy cß║ún trß╗ƒ cho viß╗çc thß╗▒c hiß╗çn c├íc ph├⌐p l╞░u trß╗»"], ans:0},
  {q:"Mß╗Ñc ti├¬u cß╗ºa chuß║⌐n ho├í dß╗» liß╗çu l├á:", opts:["─Éß║úm bß║úo t├¡nh nhß║Ñt qu├ín dß╗» liß╗çu","Triß╗çt ti├¬u mß╗⌐c cao nhß║Ñt khß║ú n─âng xuß║Ñt hiß╗çn c├íc dß╗ï th╞░ß╗¥ng th├┤ng tin","─Éß║úm bß║úo t├¡nh bß║úo mß║¡t dß╗» liß╗çu","─Éß║úm bß║úo cho viß╗çc l╞░u trß╗» dß╗» liß╗çu"], ans:1},
  {q:"Qu├í tr├¼nh chuß║⌐n ho├í dß╗» liß╗çu l├á qu├í tr├¼nh:", opts:["T├ích l╞░ß╗úc ─æß╗ô quan hß╗ç hß║ín chß║┐ thß║Ñp nhß║Ñt tß╗òn thß║Ñt th├┤ng tin","Thß╗▒c hiß╗çn c├íc ph├⌐p t├¼m kiß║┐m dß╗» liß╗çu","Chuyß╗ân ─æß╗òi biß╗âu diß╗àn th├┤ng tin trong c├íc dß║íng kh├íc nhau","T├ích l╞░ß╗úc ─æß╗ô quan hß╗ç kh├┤ng l├ám tß╗òn thß║Ñt th├┤ng tin"], ans:3},
  {q:"C╞í sß╗ƒ ─æß╗â chuß║⌐n ho├í dß╗▒a tr├¬n c├íc kh├íi niß╗çm:", opts:["Bao ─æ├│ng c├íc phß╗Ñ thuß╗Öc h├ám","Phß╗Ñ thuß╗Öc h├ám","C├íc thuß╗Öc t├¡nh, bao ─æ├│ng c├íc thuß╗Öc t├¡nh","Kho├í v├á si├¬u kho├í"], ans:1},
  {q:"Mß╗Öt m├┤ h├¼nh CSDL ─æ╞░ß╗úc xem l├á m├┤ h├¼nh chuß║⌐n ho├í tß╗æt, nß║┐u:", opts:["Kh├┤ng xuß║Ñt hiß╗çn dß╗ï th╞░ß╗¥ng th├┤ng tin","─Éß║úm bß║úo t├¡nh ─æß╗Öc lß║¡p dß╗» liß╗çu","Mß╗ùi mß╗Öt thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc h├ám v├áo kho├í","Mß╗ùi mß╗Öt thuß╗Öc t├¡nh ─æ╞░ß╗úc biß╗âu diß╗àn trong dß║íng duy nhß║Ñt"], ans:2},
  {q:"Quan hß╗ç R ─æ╞░ß╗úc gß╗ìi l├á dß║íng chuß║⌐n 1NF, khi v├á chß╗ë khi:", opts:["Mß╗Öt thuß╗Öc t├¡nh c├│ nhiß╗üu gi├í trß╗ï kh├íc nhau","C├íc thuß╗Öc t├¡nh chß╗ë chß╗⌐a c├íc gi├í trß╗ï nguy├¬n tß╗æ","Mß╗Öt quan hß╗ç c├│ nhiß╗üu h├áng","Mß╗Öt quan hß╗ç c├│ nhiß╗üu cß╗Öt"], ans:1},
  {q:"Quan hß╗ç 1NF kh├┤ng thß╗â chß║Ñp nhß║¡n ─æ╞░ß╗úc trong qu├í tr├¼nh t├¼m kiß║┐m, v├¼:", opts:["Kh├┤ng ─æß║úm bß║úo t├¡nh to├án vß║╣n dß╗» liß╗çu","Khi thao t├íc c├íc ph├⌐p l╞░u trß╗» th╞░ß╗¥ng xuß║Ñt hiß╗çn dß╗ï th╞░ß╗¥ng th├┤ng tin","Cß║Ñu tr├║c biß╗âu diß╗àn dß╗» liß╗çu phß╗⌐c tß║íp","C├│ qu├í nhiß╗üu phß╗Ñ thuß╗Öc h├ám trong n├│"], ans:1},
  {q:"Quan hß╗ç R ─æ╞░ß╗úc gß╗ìi l├á dß║íng chuß║⌐n 2NF, khi v├á chß╗ë khi:", opts:["1NF v├á c├íc thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc ─æß║ºy ─æß╗º v├áo kho├í","1NF v├á c├íc thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc kh├┤ng ─æß║ºy ─æß╗º v├áo kho├í","Tß╗ôn tß║íi X->Y trong F+ sao cho X l├á tß║¡p con cß╗ºa kh├│a v├á Y l├á thuß╗Öc t├¡nh kh├┤ng kh├│a","1NF v├á tß╗ôn tß║íi c├íc thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc ─æß║ºy ─æß╗º v├áo kho├í"], ans:0},
  {q:"Quan hß╗ç 2NF kh├┤ng thß╗â chß║Ñp nhß║¡n ─æ╞░ß╗úc trong qu├í tr├¼nh t├¼m kiß║┐m, v├¼:", opts:["Kh├┤ng thß╗â thß╗▒c hiß╗çn ─æ╞░ß╗úc c├íc ph├⌐p cß║¡p nhß║¡t","Bao ─æ├│ng phß╗Ñ thuß╗Öc h├ám qu├í lß╗¢n","C├│ thß╗â kh├┤ng thß╗â ch├¿n th├¬m th├┤ng tin","Kh├┤ng ─æß║úm bß║úo t├¡nh to├án vß║╣n dß╗» liß╗çu"], ans:2},
  {q:"C├│ thß╗â ch├¿n th├¬m th├┤ng tin mß╗Öt loß║íi c├íp khi ch╞░a ─æ╞░ß╗úc lß║»p ─æß║╖t?", opts:["Kh├┤ng thß╗â ─æ╞░ß╗úc. v├¼ dß╗ï th╞░ß╗¥ng th├┤ng tin","Kh├┤ng thß╗â ─æ╞░ß╗úc. v├¼ gi├í trß╗ï kho├í kh├┤ng x├íc ─æß╗ïnh","Kh├┤ng thß╗â ─æ╞░ß╗úc. v├¼ m├óu thuß║½n th├┤ng tin","C├│ thß╗â ch├¿n ─æ╞░ß╗úc"], ans:1},
  {q:"Trong quan hß╗ç dß║íng chuß║⌐n 3NF:", opts:["Kh├┤ng tß╗ôn tß║íi c├íc thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc v├áo kho├í","Kh├┤ng tß╗ôn tß║íi c├íc thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc ─æß║ºy ─æß╗º v├áo kho├í v├á s╞í ─æß╗ô bß║»c cß║ºu","Tß╗ôn tß║íi c├íc thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc v├áo kho├í v├á s╞í ─æß╗ô bß║»c cß║ºu","Tß╗ôn tß║íi c├íc thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc v├áo kho├í"], ans:3},
  {q:"Quan hß╗ç 3NF c├│ thß╗â chß║Ñp nhß║¡n ─æ╞░ß╗úc trong qu├í tr├¼nh t├¼m kiß║┐m, v├¼:", opts:["Thß╗▒c hiß╗çn ─æ╞░ß╗úc c├íc ph├⌐p cß║¡p nhß║¡t","─Éß║úm bß║úo t├¡nh to├án vß║╣n dß╗» liß╗çu","Bao ─æ├│ng phß╗Ñ thuß╗Öc h├ám qu├í lß╗¢n","Kh├┤ng xuß║Ñt hiß╗çn dß╗ï th╞░ß╗¥ng th├┤ng tin khi thß╗▒c hiß╗çn c├íc ph├⌐p l╞░u trß╗»"], ans:3},
  {q:"Quan hß╗ç gß╗ôm c├íc thuß╗Öc t├¡nh m├ú sß╗æ, hß╗ì t├¬n v├á ─æß╗ïa chß╗ë ß╗ƒ dß║íng chuß║⌐n n├áo?", opts:["Dß║íng chuß║⌐n 3NF","Dß║íng chuß║⌐n 2NF, kh├┤ng l├á 3NF","Dß║íng chuß║⌐n 1NF, kh├┤ng l├á 2NF","Dß║íng chuß║⌐n 2NF"], ans:0},
  {q:"Mß╗Öt quan hß╗ç dß║íng chuß║⌐n 1NF c├│ thß╗â chuyß╗ân ─æß╗òi vß╗ü nh├│m c├íc quan hß╗ç 3NF bß║▒ng c├ích:", opts:["Loß║íi bß╗Å c├íc phß╗Ñ thuß╗Öc bß║»c cß║ºu v├áo kho├í","Loß║íi bß╗Å c├íc phß╗Ñ thuß╗Öc kh├┤ng ─æß║ºy ─æß╗º v├áo kho├í","Loß║íi bß╗Å c├íc phß╗Ñ thuß╗Öc kh├┤ng ─æß║ºy ─æß╗º v├áo kho├í v├á bß║»c cß║ºu v├áo kho├í","Loß║íi bß╗Å c├íc phß╗Ñ thuß╗Öc ─æß║ºy ─æß╗º v├áo kho├í v├á bß║»c cß║ºu v├áo kho├í"], ans:2},
  {q:"Qu├í tr├¼nh chuyß╗ân quan hß╗ç 1NF vß╗ü 3NF l├á qu├í tr├¼nh:", opts:["Loß║íi bß╗Å dß╗ï th╞░ß╗¥ng th├┤ng tin v├á kh├┤ng tß╗òn thß║Ñt th├┤ng tin","Loß║íi bß╗Å dß╗ï th╞░ß╗¥ng th├┤ng tin v├á tß╗òn thß║Ñt th├┤ng tin","Loß║íi bß╗Å dß╗ï th╞░ß╗¥ng th├┤ng tin","Kh├┤ng tß╗òn thß║Ñt th├┤ng tin"], ans:0},
  {q:"Ng├┤n ngß╗» thao t├íc dß╗» liß╗çu l├á:", opts:["Mß╗Öt tß║¡p c├íc k├╜ hiß╗çu biß╗âu diß╗àn dß╗» liß╗çu","Mß╗Öt tß║¡p c├íc quy tß║»c biß╗âu diß╗àn dß╗» liß╗çu","Mß╗Öt tß║¡p c├íc ph├⌐p to├ín d├╣ng ─æß╗â thao t├íc tr├¬n c├íc hß╗ç c╞í sß╗ƒ dß╗» liß╗çu","Mß╗Öt tß║¡p c├íc ph├⌐p to├ín d├╣ng ─æß╗â cß║¡p nhß║¡t, bß╗ò sung tr├¬n c├íc hß╗ç c╞í sß╗ƒ dß╗» liß╗çu"], ans:2},
  {q:"C├íc to├ín hß║íng trong c├íc ph├⌐p to├ín l├á:", opts:["C├íc thuß╗Öc t├¡nh","C├íc biß╗âu thß╗⌐c","C├íc bß╗Ö n_gi├í trß╗ï","C├íc quan hß╗ç"], ans:3},
  {q:"Kß║┐t quß║ú cß╗ºa c├íc ph├⌐p thao t├íc dß╗» liß╗çu l├á:", opts:["Quan hß╗ç","Tß╗çp dß╗» liß╗çu","Chuß╗ùi dß╗» liß╗çu","C╞í sß╗ƒ dß╗» liß╗çu"], ans:0},
  {q:"Ph├⌐p ch├¿n th├¬m l├á ph├⌐p to├ín:", opts:["Ch├¿n v├áo CSDL mß╗Öt sß╗æ th├┤ng tin vß╗ü mß╗Öt ─æß╗æi t╞░ß╗úng","Ch├¿n v├áo CSDL c├íc thuß╗Öc t├¡nh mß╗¢i","Ch├¿n v├áo CSDL mß╗Öt sß╗æ th├┤ng tin tuß╗│ ├╜","Ch├¿n v├áo CSDL tß╗½ v├╣ng ─æß╗çm chß╗⌐a c├íc th├┤ng tin vß╗ü mß╗Öt bß║ún ghi cß╗Ñ thß╗â"], ans:3},
  {q:"Ph├⌐p xo├í l├á ph├⌐p to├ín:", opts:["Xo├í mß╗Öt thuß╗Öc t├¡nh hay xo├í mß╗Öt nh├│m c├íc thuß╗Öc t├¡nh","Xo├í mß╗Öt quan hß╗ç hay xo├í mß╗Öt nh├│m c├íc quan hß╗ç","Xo├í mß╗Öt hß╗ç CSDL","Xo├í mß╗Öt bß╗Ö hay xo├í mß╗Öt nh├│m c├íc bß╗Ö"], ans:3},
  {q:"Ph├⌐p sß╗¡a ─æß╗òi l├á ph├⌐p to├ín:", opts:["Sß╗¡a ─æß╗òi gi├í trß╗ï cß╗ºa mß╗Öt bß╗Ö hay mß╗Öt nh├│m c├íc bß╗Ö","Sß╗¡a ─æß╗òi gi├í trß╗ï cß╗ºa mß╗Öt sß╗æ thuß╗Öc t├¡nh","Sß╗¡a ─æß╗òi m├┤ tß║ú c├íc thuß╗Öc t├¡nh","Sß╗¡a ─æß╗òi gi├í trß╗ï cß╗ºa mß╗Öt quan hß╗ç hay mß╗Öt nh├│m c├íc quan hß╗ç"], ans:0},
  {q:"Ph├⌐p chß╗ìn SELECT l├á ph├⌐p to├ín:", opts:["Tß║ío mß╗Öt quan hß╗ç mß╗¢i tß╗½ quan hß╗ç nguß╗ôn","Tß║ío mß╗Öt quan hß╗ç mß╗¢i, thoß║ú m├ún mß╗Öt t├ón tß╗½ x├íc ─æß╗ïnh","Tß║ío mß╗Öt nh├│m c├íc phß╗Ñ thuß╗Öc","Tß║ío mß╗Öt quan hß╗ç mß╗¢i, c├íc bß╗Ö ─æ╞░ß╗úc r├║t ra mß╗Öt c├ích duy nhß║Ñt tß╗½ quan hß╗ç nguß╗ôn"], ans:1},
  {q:"Ph├⌐p chiß║┐u PROJECT l├á ph├⌐p to├ín:", opts:["Tß║ío mß╗Öt quan hß╗ç mß╗¢i, c├íc thuß╗Öc t├¡nh l├á c├íc thuß╗Öc t├¡nh quan hß╗ç nguß╗ôn","Tß║ío mß╗Öt quan hß╗ç mß╗¢i, c├íc bß╗Ö cß╗ºa quan hß╗ç nguß╗ôn bß╗Å ─æi nhß╗»ng bß╗Ö tr├╣ng lß║╖p","Tß║ío mß╗Öt quan hß╗ç mß╗¢i, thoß║ú m├ún mß╗Öt t├ón tß╗½ x├íc ─æß╗ïnh","Tß║ío mß╗Öt quan hß╗ç mß╗¢i, c├íc thuß╗Öc t├¡nh ─æ╞░ß╗úc biß║┐n ─æß╗òi tß╗½ quan hß╗ç nguß╗ôn"], ans:1},
  {q:"Ph├⌐p kß║┐t nß╗æi JOIN l├á ph├⌐p to├ín:", opts:["Tß║ío mß╗Öt quan hß╗ç mß╗¢i","Tß║ío mß╗Öt quan hß╗ç mß╗¢i, c├íc thuß╗Öc t├¡nh l├á c├íc thuß╗Öc t├¡nh quan hß╗ç nguß╗ôn","Tß║ío mß╗Öt quan hß╗ç mß╗¢i, thoß║ú m├ún mß╗Öt t├ón tß╗½ x├íc ─æß╗ïnh","Tß║ío mß╗Öt quan hß╗ç mß╗¢i, kß║┐t nß╗æi nhiß╗üu quan hß╗ç tr├¬n miß╗ün thuß╗Öc t├¡nh chung"], ans:3},
  {q:"Kß║┐t nß╗æi bß║▒ng nhau c├íc quan hß╗ç theo thuß╗Öc t├¡nh l├á:", opts:["Thß╗▒c hiß╗çn t├¡ch ─Éß╗ü C├íc v├á ph├⌐p chß╗ìn","Thß╗▒c hiß╗çn t├¡ch ─Éß╗ü C├íc v├á ph├⌐p chiß║┐u","Thß╗▒c hiß╗çn ph├⌐p chiß║┐u v├á chia","Thß╗▒c hiß╗çn ph├⌐p chiß║┐u v├á ph├⌐p chß╗ìn"], ans:0},
  {q:"Trong SQL, ng├┤n ngß╗» ─æß╗ïnh ngh─⌐a dß╗» liß╗çu bao gß╗ôm c├íc chß╗⌐c n─âng:", opts:["Tß║ío, sß╗¡a v├á x├│a cß║Ñu tr├║c quan hß╗ç. Bß║úo mß║¡t v├á quyß╗ün truy nhß║¡p","Bß║úo mß║¡t v├á quyß╗ün truy nhß║¡p","Tß║ío, sß╗¡a v├á x├│a cß║Ñu tr├║c quan hß╗ç. Th├¬m cß╗Öt, sß╗¡a cß╗Öt v├á xo├í cß╗Öt","Tß║ío, sß╗¡a v├á x├│a c├íc bß╗Ö quan hß╗ç. Bß║úo mß║¡t v├á quyß╗ün truy nhß║¡p"], ans:0},
  {q:"Trong SQL, ng├┤n ngß╗» thao t├íc dß╗» liß╗çu DML bao gß╗ôm c├íc chß╗⌐c n─âng:", opts:["Truy vß║Ñn th├┤ng tin, th├¬m, sß╗¡a, xo├í dß╗» liß╗çu","Bß║úo mß║¡t v├á quyß╗ün truy nhß║¡p","Tß║ío, sß╗¡a v├á x├│a cß║Ñu tr├║c quan hß╗ç","Tß║ío, sß╗¡a v├á x├│a cß║Ñu tr├║c v├á ─æß║úm bß║úo bß║úo mß║¡t v├á quyß╗ün truy nhß║¡p"], ans:0},
  {q:"Thß╗⌐ tß╗▒ ─æ├║ng trong c├óu lß╗çnh SELECT:", opts:["SELECT, FROM, GROUP BY HAVING, WHERE, ORDER BY","SELECT, FROM, WHERE, GROUP BY HAVING, ORDER BY","SELECT, FROM, GROUP BY HAVING, ORDER BY","SELECT, FROM, GROUP BY HAVING, ORDER BY"], ans:1},
  {q:"C├íc b╞░ß╗¢c thß╗▒c hiß╗çn ─æ├║ng trong c├óu lß╗çnh SELECT:", opts:["T├¡ch ─Éß╗ü c├íc, ph├⌐p to├ín chß╗ìn, theo nh├│m, sß║»p xß║┐p v├á ph├⌐p chiß║┐u","T├¡ch ─Éß╗ü c├íc, ph├⌐p to├ín chß╗ìn, theo nh├│m, ph├⌐p chiß║┐u v├á sß║»p xß║┐p","Ph├⌐p to├ín chß╗ìn, t├¡ch ─Éß╗ü c├íc, theo nh├│m, sß║»p xß║┐p v├á ph├⌐p chiß║┐u","Ph├⌐p to├ín chß╗ìn, t├¡ch ─Éß╗ü c├íc, theo nh├│m, ph├⌐p chiß║┐u v├á sß║»p xß║┐p"], ans:1},
  {q:"Ph├⌐p to├ín tß║¡p hß╗úp trong mß╗çnh ─æß╗ü WHERE bao gß╗ôm:", opts:["C├íc ph├⌐p sß╗æ hß╗ìc v├á c├íc ph├⌐p so s├ính","C├íc ph├⌐p ─æß║íi sß╗æ quan hß╗ç","C├íc ph├⌐p so s├ính","Biß╗âu thß╗⌐c ─æß║íi sß╗æ"], ans:0},
  {q:"C├íc ph├⌐p to├ín gß╗Öp nh├│m ─æ╞░ß╗úc sß╗¡ dß╗Ñng sau mß╗çnh ─æß╗ü:", opts:["SELECT","WHERE","GROUP BY","FROM"], ans:2},
  {q:"Ph├⌐p chß╗ìn ─æ╞░ß╗úc thß╗▒c hiß╗çn sau mß╗çnh ─æß╗ü n├áo trong SELECT - FROM - WHERE?", opts:["GROUP BY HAVING","SELECT","WHERE","FROM"], ans:2},
  {q:"Ph├⌐p chiß║┐u ─æ╞░ß╗úc thß╗▒c hiß╗çn sau mß╗çnh ─æß╗ü n├áo trong SELECT - FROM - WHERE:", opts:["FROM","SELECT","GROUP BY HAVING","WHERE"], ans:1},
  {q:"Mß╗çnh ─æß╗ü GROUP BY ... HAVING:", opts:["Ph├ón hoß║ích c├íc bß╗Ö cß╗ºa mß╗Öt quan hß╗ç th├ánh c├íc nh├│m ri├¬ng biß╗çt","├üp dß╗Ñng c├íc ph├⌐p to├ín gß╗Öp nh├│m","Ph├ón hoß║ích c├íc bß╗Ö cß╗ºa mß╗Öt quan hß╗ç th├ánh c├íc nh├│m ri├¬ng biß╗çt v├á ├íp dß╗Ñng c├íc ph├⌐p to├ín gß╗Öp cho c├íc nh├│m","T├ích c├íc quan hß╗ç th├ánh c├íc quan hß╗ç con, kh├┤ng tß╗òn thß║Ñt th├┤ng tin"], ans:2},
  {q:"Ng├┤n ngß╗» ─æß╗ïnh ngh─⌐a dß╗» liß╗çu - DDL (Data Definition Language):", opts:["─É╞░ß╗úc ─æß║╖c tß║ú bß║▒ng mß╗Öt ng├┤n ngß╗» dß╗» liß╗çu","─É╞░ß╗úc ─æß║╖c tß║ú bß║▒ng mß╗Öt ng├┤n ngß╗», mß╗Öt phß║ºn cß╗ºa hß╗ç quß║ún trß╗ï c╞í sß╗ƒ dß╗» liß╗çu","─É╞░ß╗úc ─æß║╖c tß║ú bß║▒ng mß╗Öt phß║ºn cß╗ºa hß╗ç quß║ún trß╗ï c╞í sß╗ƒ dß╗» liß╗çu","─É╞░ß╗úc ─æß║╖c tß║ú bß║▒ng c├ích ch╞░╞íng tr├¼nh ß╗⌐ng dß╗Ñng"], ans:1},
  {q:"Tß╗æi ╞░u ho├í c├óu hß╗Åi truy vß║Ñn dß╗» liß╗çu l├á:", opts:["Qu├í tr├¼nh biß║┐n ─æß╗òi c├óu hß╗Åi vß╗ü dß║íng quan hß╗ç","Qu├í tr├¼nh biß║┐n ─æß╗òi c├óu hß╗Åi vß╗ü dß║íng ─æ╞ín giß║ún","Qu├í tr├¼nh biß║┐n ─æß╗òi c├óu hß╗Åi vß╗ü dß║íng biß╗âu thß╗⌐c quan hß╗ç","Qu├í tr├¼nh biß║┐n ─æß╗òi c├óu hß╗Åi sao cho chi ph├¡ thß╗¥i gian thß╗▒c hiß╗çn l├á ├¡t nhß║Ñt"], ans:3},
  {q:"Sß╗▒ cß║ºn thiß║┐t phß║úi tß╗æi ╞░u ho├í c├óu hß╗Åi:", opts:["N├óng cao hiß╗çu suß║Ñt c├íc phi├¬n l├ám viß╗çc cß╗ºa ng╞░ß╗¥i sß╗¡ dß╗Ñng","T├¼m kiß║┐m v├á truy xuß║Ñt dß╗» liß╗çu tß║íi c├íc thiß║┐t bß╗ï ─æß║ºu cuß╗æi","Chia sß║╗ th├┤ng tin nhiß╗üu ng╞░ß╗¥i sß╗¡ dß╗Ñng","Tß╗æi ╞░u vß╗ü kh├┤ng gian l╞░u trß╗»"], ans:0},
  {q:"Tß╗æi ╞░u theo ngh─⌐a biß║┐n ─æß╗òi mß╗Öt biß╗âu thß╗⌐c ─æß║íi sß╗æ quan hß╗ç:", opts:["Cho c├╣ng mß╗Öt kß║┐t quß║ú vß╗¢i chi ph├¡ thß╗¥i gian thß╗▒c hiß╗çn v├á sß╗¡ dß╗Ñng bß╗Ö nhß╗¢ ├¡t h╞ín","Cho c├╣ng mß╗Öt kß║┐t quß║ú, kh├┤ng tß╗òn thß║Ñt th├┤ng tin","Vß╗¢i chi ph├¡ thß╗¥i gian ├¡t h╞ín rß║Ñt nhiß╗üu","Cho c├╣ng mß╗Öt kß║┐t quß║ú vß╗¢i chi ph├¡ bß╗Ö nhß╗¢ kh├┤ng nhiß╗üu"], ans:0},
  {q:"Tß╗æi ╞░u ho├í c├óu hß╗Åi bß║▒ng c├ích:", opts:["Thß╗▒c hiß╗çn c├íc ph├⌐p chiß║┐u v├á chß╗ìn, tiß║┐p sau mß╗¢i thß╗▒c hiß╗çn ph├⌐p kß║┐t nß╗æi","Thß╗▒c hiß╗çn c├íc ph├⌐p to├ín ─æß║íi sß╗æ quan hß╗ç","Bß╗Å ─æi c├íc ph├⌐p kß║┐t nß╗æi hoß║╖c t├¡ch ─Éß╗ü c├íc c├│ chi ph├¡ lß╗¢n","Thß╗▒c hiß╗çn biß║┐n ─æß╗òi kh├┤ng l├ám tß╗òn thß║Ñt th├┤ng tin"], ans:0},
  {q:"Nguy├¬n tß║»c ─æ├ính gi├í tß╗æi ╞░u h├│a biß╗âu thß╗⌐c quan hß╗ç:", opts:["Thß╗▒c hiß╗çn c├íc ph├⌐p kß║┐t nß╗æi bß║▒ng nhau","╞»u ti├¬n thß╗▒c hiß╗çn c├íc ph├⌐p chiß║┐u v├á chß╗ìn","Thß╗▒c hiß╗çn ph├⌐p t├¡ch ─Éß╗ü c├íc","Nh├│m c├íc ph├⌐p t├¡ch v├á chiß║┐u li├¬n tiß║┐p th├ánh mß╗Öt ph├⌐p to├ín duy nhß║Ñt"], ans:1},
  {q:"Hai biß╗âu thß╗⌐c E1 v├á E2 t╞░╞íng ─æ╞░╞íng vß╗¢i nhau, k├╜ hiß╗çu l├á E1 = E2, nß║┐u:", opts:["C├íc quan hß╗ç giß╗æng nhau trong biß╗âu thß╗⌐c","Ch├║ng biß╗âu diß╗àn c├╣ng mß╗Öt ├ính xß║í","C├íc kß║┐t quß║ú giß╗æng nhau","C├íc quan hß╗ç trong c├íc biß╗âu thß╗⌐c c├╣ng miß╗ün x├íc ─æß╗ïnh"], ans:1},
  {q:"Khi thß╗▒c hiß╗çn c├íc ph├⌐p to├ín trong mß╗Öt biß╗âu thß╗⌐c quan hß╗ç, thß╗⌐ tß╗▒ ╞░u ti├¬n l├á:", opts:["Ph├⌐p kß║┐t nß╗æi ─æ╞░ß╗úc ╞░u ti├¬n h╞ín so vß╗¢i ph├⌐p chß╗ìn v├á chiß║┐u","C├íc ph├⌐p to├ín mß╗Öt ng├┤i c├│ thß╗⌐ tß╗▒ ╞░u ti├¬n cao h╞ín so vß╗¢i ph├⌐p to├ín hai ng├┤i","Phß╗Ñ thuß╗Öc v├áo vß╗ï tr├¡ cß╗ºa c├íc ph├⌐p to├ín","Ph├⌐p kß║┐t nß╗æi ─æ╞░ß╗úc ╞░u ti├¬n h╞ín so vß╗¢i ph├⌐p hß╗úp, ph├⌐p giao"], ans:1},
  {q:"Mß╗Öt c├óu hß╗Åi cß╗ºa ng╞░ß╗¥i sß╗¡ dß╗Ñng:", opts:["─É╞░ß╗úc biß╗âu diß╗àn bß║▒ng mß╗Öt ─æß║íi sß╗æ quan hß╗ç","─É╞░ß╗úc biß╗âu diß╗àn bß║▒ng nhiß╗üu c├ích kh├íc nhau","─É╞░ß╗úc biß╗âu diß╗àn bß║▒ng mß╗Öt quan hß╗ç","─É╞░ß╗úc biß╗âu diß╗àn bß║▒ng mß╗Öt biß╗âu thß╗⌐c quan hß╗ç"], ans:1},
  {q:"C╞í sß╗ƒ dß╗» liß╗çu cß║ºn thiß║┐t phß║úi bß║úo vß╗ç, v├¼:", opts:["Rß║Ñt nhiß╗üu loß║íi dß╗» liß╗çu ─æ╞░ß╗úc tß║úi vß╗ü giß╗» tr├¬n c├íc m├íy cß╗Ñc bß╗Ö ─æß╗â khai th├íc","T├ái nguy├¬n chung, nhiß╗üu ng╞░ß╗¥i c├╣ng sß╗¡ dß╗Ñng","Mß╗Öt bß╗Ö s╞░u tß║¡p rß║Ñt lß╗¢n vß╗ü c├íc loß║íi dß╗» liß╗çu t├íc nghiß╗çp","Truy xuß║Ñt v├áo c╞í sß╗ƒ dß╗» liß╗çu bß║▒ng nhiß╗üu ng├┤n ngß╗» thao t├íc dß╗» liß╗çu kh├íc nhau"], ans:1},
  {q:"Bß║úo vß╗ç an to├án c╞í sß╗ƒ dß╗» liß╗çu c├│ thß╗â l├á:", opts:["Kh├┤ng cho ph├⌐p ghi ─æ├¿ dß╗» liß╗çu","Kh├┤ng cho ph├⌐p cß║¡p nhß║¡t dß╗» liß╗çu","Kh├┤ng cho ph├⌐p ─æß╗ìc, sß╗¡a ─æß╗òi, ghi, xo├í dß╗» liß╗çu","Kh├┤ng cho ph├⌐p sß╗¡a ─æß╗òi dß╗» liß╗çu"], ans:2},
  {q:"Mß╗⌐c ─æß╗Ö an to├án hß╗ç thß╗æng c╞í sß╗ƒ dß╗» liß╗çu:", opts:["C├│ thß╗â ─æ╞░ß╗úc ph├⌐p thß╗▒c hiß╗çn c├íc c├óu hß╗Åi truy vß║Ñn","Ng╞░ß╗¥i quß║ún trß╗ï c╞í sß╗ƒ dß╗» liß╗çu cß║Ñp ph├⌐p truy nhß║¡p cho bß║Ñt kß╗│ ng╞░ß╗¥i sß╗¡ dß╗Ñng","Phß╗Ñ thuß╗Öc v├áo ng╞░ß╗¥i sß╗¡ dß╗Ñng, kh├┤ng cß║ºn sß╗▒ cß║Ñp ph├⌐p cß╗ºa ng╞░ß╗¥i quß║ún trß╗ï","Ng╞░ß╗¥i quß║ún trß╗ï cß║Ñp ph├⌐p truy nhß║¡p cho ng╞░ß╗¥i sß╗¡ dß╗Ñng khi c├│ nhu cß║ºu"], ans:3},
  {q:"'An to├án' dß╗» liß╗çu c├│ ngh─⌐a l├á c╞í sß╗ƒ dß╗» liß╗çu....", opts:["Cß║ºn phß║úi ─æ╞░ß╗úc bß║úo vß╗ç chß╗æng truy nhß║¡p tr├íi ph├⌐p","Chß╗æng sß╗¡a ─æß╗òi hay ph├í hoß║íi","Cß║ºn thiß║┐t phß║úi quß║ún trß╗ï, bß║úo vß╗ç tß║¡p trung","Chß╗æng vi phß║ím c├│ chß╗º ─æß╗ïnh"], ans:0},
  {q:"─Éß╗â bß║úo vß╗ç c╞í sß╗ƒ dß╗» liß╗çu, phß║úi thß╗▒c hiß╗çn biß╗çn ph├íp an to├án:", opts:["Mß║íng","Hß╗ç thß╗æng, ng╞░ß╗¥i quß║ún trß╗ï cß║Ñp ph├⌐p, an to├án mß║íng","An to├án hß╗ç thß╗æng ─æiß╗üu h├ánh","Ng╞░ß╗¥i quß║ún trß╗ï c╞í sß╗ƒ dß╗» liß╗çu cß║Ñp ph├⌐p truy nhß║¡p"], ans:1},
  {q:"Mß╗Öt sß╗æ biß╗çn ph├íp bß║úo vß╗ç c╞í sß╗ƒ dß╗» liß╗çu:", opts:["Ng╞░ß╗¥i quß║ún trß╗ï c╞í sß╗ƒ dß╗» liß╗çu cß║Ñp ph├⌐p truy nhß║¡p","Nhß║¡n diß╗çn ng╞░ß╗¥i sß╗¡ dß╗Ñng, bß║úo vß╗ç mß╗⌐c vß║¡t l├╜, kiß╗âm tra truy nhß║¡p","Kiß╗âm tra Password","Kiß╗âm tra truy nhß║¡p ng╞░ß╗¥i sß╗¡ dß╗Ñng"], ans:1},
  {q:"An to├án mß╗⌐c ─æß╗Ö mß║íng:", opts:["Kh├┤ng cho ph├⌐p truy cß║¡p tß╗½ xa","Bß║úo vß╗ç th├┤ng tin tr├¬n ─æ╞░ß╗¥ng truyß╗ün","Cho ph├⌐p truy cß║¡p tß╗½ xa","Cho ph├⌐p truy cß║¡p tß╗½ xa, c├│ kiß╗âm so├ít"], ans:1},
  {q:"Mß╗⌐c ─æß╗Ö nhß║¡n diß╗çn ng╞░ß╗¥i sß╗¡ dß╗Ñng:", opts:["X├íc ─æß╗ïnh cho hß╗ç thß╗æng nhß╗»ng thao t├íc","Cho ph├⌐p ng╞░ß╗¥i sß╗¡ dß╗Ñng truy nhß║¡p","Nß║┐u ─æ╞░ß╗úc ph├⌐p cß╗ºa ng╞░ß╗¥i quß║ún trß╗ï CSDL","Ng╞░ß╗¥i quß║ún trß╗ï cung cß║Ñp ph╞░╞íng tiß╗çn cho ng╞░ß╗¥i sß╗¡ dß╗Ñng ─æß╗â hß╗ç thß╗æng nhß║¡n biß║┐t"], ans:3},
  {q:"Mß╗⌐c bß║úo vß╗ç mß╗⌐c vß║¡t l├╜:", opts:["Nhß║¡n diß╗çn bß║▒ng c├ích kiß╗âm tra","Nhß║¡n diß╗çn qua nh├ón vi├¬n bß║úo vß╗ç, hoß║╖c c├íc quy ─æß╗ïnh vß╗ü h├ánh ch├¡nh","Nhß║¡n diß╗çn bß║▒ng c├íc ph╞░╞íng ph├íp trao quyß╗ün","Nhß║¡n diß╗çn bß║▒ng mß║¡t khß║⌐u"], ans:1},
  {q:"Dß║íng cß║Ñp quyß╗ün truy xuß║Ñt trong SQL:", opts:["GRANT ON TO","GRANT ON TO","GRANT ON TO","GRANT READ ON R"], ans:0},
  {q:"Dß║íng thu hß╗ôi quyß╗ün truy nhß║¡p:", opts:["REVOKE ON FROM","REVOKE ON FROM","REVOKE ON FROM","REVOKE SELECT ON FROM"], ans:0},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü ─æß╗æi t╞░ß╗úng nghi├¬n cß╗⌐u CSDL:", opts:["CSDL bao gß╗ôm l├á c├íc thß╗▒c thß╗â","CSDL bao gß╗ôm l├á c├íc thß╗▒c thß╗â v├á mß╗æi quan hß╗ç giß╗»a c├íc thß╗▒c thß╗â","Trong CSDL quan hß╗ç c├│ nhiß╗üu c├ích biß╗âu diß╗àn dß╗» liß╗çu","Mß╗æi quan hß╗ç giß╗»a c├íc thß╗▒c thß╗â c┼⌐ng l├á mß╗Öt loß║íi thß╗▒c thß╗â"], ans:3},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü ╞░u ─æiß╗âm tß╗ò chß╗⌐c l╞░u trß╗» dß╗» liß╗çu theo l├╜ thuyß║┐t c╞í sß╗ƒ dß╗» liß╗çu:", opts:["Tß╗æn k├⌐m, l├úng ph├¡ bß╗Ö nhß╗¢ v├á c├íc thiß║┐t bß╗ï l╞░u trß╗»","C├│ thß╗â chia sß║╗ t├ái nguy├¬n th├┤ng tin v├á giß║úm d╞░ thß╗½a trong l╞░u trß╗»","Nhiß╗üu thuß╗Öc t├¡nh ─æ╞░ß╗úc m├┤ tß║ú v├á l╞░u trß╗» nhiß╗üu lß║ºn ─æß╗Öc lß║¡p vß╗¢i nhau","Giß║úm d╞░ thß╗½a dß╗» liß╗çu trong l╞░u trß╗»"], ans:1},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü t├¡nh nhß║Ñt qu├ín v├á t├¡nh to├án vß║╣n cß╗ºa dß╗» liß╗çu:", opts:["Tr├ính d╞░ thß╗½a dß╗» liß╗çu trong l╞░u trß╗»","Mß╗Öt thuß╗Öc t├¡nh ─æ╞░ß╗úc m├┤ tß║ú lß║╖p lß║íi nhiß╗üu lß║ºn","Tiß║┐t kiß╗çm bß╗Ö nhß╗¢ v├á c├íc thiß║┐t bß╗ï l╞░u trß╗»","Tr├ính ─æ╞░ß╗úc dß╗ï th╞░ß╗¥ng th├┤ng tin"], ans:3},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["Sß╗▒ kh├┤ng nhß║Ñt qu├ín dß╗» liß╗çu trong l╞░u trß╗» l├ám cho dß╗» liß╗çu mß║Ñt ─æi t├¡nh to├án vß║╣n","Tß╗ò chß╗⌐c l╞░u trß╗» theo l├╜ thuyß║┐t c╞í sß╗ƒ dß╗» liß╗çu, c├íc thuß╗Öc t├¡nh c├│ thß╗â lß║╖p lß║íi","T├¡nh to├án vß║╣n dß╗» liß╗çu ─æß║úm bß║úo dß╗» liß╗çu lu├┤n lu├┤n ─æ├║ng","T├¡nh nhß║Ñt qu├ín dß╗» liß╗çu ─æß║úm bß║úo cho sß╗▒ cß║¡p nhß║¡t, bß╗ò sung dß╗à d├áng"], ans:0},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü biß╗çn ph├íp an to├án dß╗» liß╗çu:", opts:["Thß╗æng nhß║Ñt c├íc ti├¬u chuß║⌐n, thß╗º tß╗Ñc v├á c├íc biß╗çn ph├íp bß║úo vß╗ç","Dß╗à d├áng truy xuß║Ñt, thao t├íc tr├¬n c├íc c╞í sß╗ƒ dß╗» liß╗çu","Ng─ân chß║╖n c├íc truy nhß║¡p tr├íi ph├⌐p, sai quy ─æß╗ïnh tß╗½ trong ra hoß║╖c tß╗½ ngo├ái v├áo","Ng╞░ß╗¥i sß╗¡ dß╗Ñng c├│ thß╗â kiß╗âm tra, kiß╗âm so├ít c├íc quyß╗ün truy nhß║¡p cß╗ºa hß╗ì"], ans:2},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["M├┤ h├¼nh kiß║┐n tr├║c 3 lß╗¢p dß╗» liß╗çu l├á m├┤ h├¼nh l╞░u trß╗» c╞í sß╗ƒ dß╗» liß╗çu","M├┤ h├¼nh kiß║┐n tr├║c 3 lß╗¢p dß╗» liß╗çu ─æß║úm bß║úo t├¡nh nhß║Ñt qu├ín v├á to├án vß║╣n dß╗» liß╗çu","M├┤ h├¼nh kiß║┐n tr├║c 3 lß╗¢p dß╗» liß╗çu ─æß║úm bß║úo t├¡nh bß║úo mß║¡t v├á an to├án dß╗» liß╗çu","M├┤ h├¼nh kiß║┐n tr├║c 3 lß╗¢p ─æß║úm bß║úo t├¡nh ─æß╗Öc lß║¡p dß╗» liß╗çu"], ans:3},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["Nhiß╗üu ng╞░ß╗¥i sß╗¡ dß╗Ñng c├│ c├ích nh├¼n chung mß╗Öt khung nh├¼n dß╗» liß╗çu","C├│ duy nhß║Ñt mß╗Öt c├ích nh├¼n dß╗» liß╗çu ß╗ƒ m├┤ h├¼nh ngo├ái","Mß╗Öt ng╞░ß╗¥i sß╗¡ dß╗Ñng c├│ mß╗Öt v├á chß╗ë mß╗Öt m├┤ h├¼nh ngo├ái","M├┤ h├¼nh ngo├ái l├á nß╗Öi dung th├┤ng tin cß╗ºa mß╗Öt phß║ºn dß╗» liß╗çu cß╗ºa ng╞░ß╗¥i sß╗¡ dß╗Ñng"], ans:3},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["M├┤ h├¼nh quan niß╗çm l├á c├ích nh├¼n dß╗» liß╗çu cß╗ºa ng╞░ß╗¥i sß╗¡ dß╗Ñng","Chß╗ë c├│ nhiß╗üu c├ích nh├¼n dß╗» liß╗çu ß╗ƒ m├┤ h├¼nh quan niß╗çm","Biß╗âu diß╗àn to├án bß╗Ö th├┤ng tin trong m├┤ h├¼nh quan niß╗çm l├á duy nhß║Ñt","M├┤ h├¼nh dß╗» liß╗çu l├á nß╗Öi dung th├┤ng tin cß╗ºa ng╞░ß╗¥i sß╗¡ dß╗Ñng"], ans:2},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["M├┤ h├¼nh trong l├á m├┤ h├¼nh dß╗» liß╗çu","Chß╗ë c├│ duy nhß║Ñt mß╗Öt c├ích biß╗âu diß╗àn CSDL d╞░ß╗¢i dß║íng l╞░u trß╗» vß║¡t l├╜","M├┤ h├¼nh dß╗» liß╗çu l├á nß╗Öi dung th├┤ng tin cß╗ºa ng╞░ß╗¥i sß╗¡ dß╗Ñng","Biß╗âu diß╗àn c╞í sß╗ƒ dß╗» liß╗çu tr├¼u t╞░ß╗úng ß╗ƒ mß╗⌐c thß║Ñp nhß║Ñt"], ans:3},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["Cß║Ñu tr├║c l╞░u trß╗» v├á c├íc hß╗ç ch╞░╞íng tr├¼nh ß╗⌐ng dß╗Ñng tr├¬n ─æß╗Öc lß║¡p vß╗¢i nhau","Ng╞░ß╗¥i sß╗¡ dß╗Ñng khi thao t├íc tr├¬n c├íc c╞í sß╗ƒ dß╗» liß╗çu c├│ thß╗â l├ám thay ─æß╗òi cß║Ñu tr├║c l╞░u trß╗» dß╗» liß╗çu","Mß╗Ñc ti├¬u cß╗ºa c├íc hß╗ç CSDL l├á t├¡nh bß║Ñt biß║┐n cuß║ú c├íc hß╗ç ß╗⌐ng dß╗Ñng ─æß╗æi vß╗¢i sß╗▒ thay ─æß╗òi trong cß║Ñu tr├║c l╞░u trß╗»","Dß╗» liß╗çu ─æ╞░ß╗úc biß╗âu diß╗àn, m├┤ tß║ú nhiß╗üu c├ích kh├íc nhau"], ans:2},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["R├áng buß╗Öc dß╗» liß╗çu l├á c├íc kh├íi niß╗çm vß╗ü phß╗Ñ thuß╗Öc h├ám","R├áng buß╗Öc dß╗» liß╗çu bß║úo ─æß║úm t├¡nh ─æß╗Öc lß║¡p","C├íc r├áng buß╗Öc l├á tß║¡p c├íc quy tß║»c, quy ─æß╗ïnh biß╗âu diß╗àn dß╗» liß╗çu trong c╞í sß╗ƒ dß╗» liß╗çu","Giß╗»a c├íc thß╗▒c thß╗â dß╗» liß╗çu tß╗ôn tß║íi c├íc mß╗æi quan hß╗ç, r├áng buß╗Öc lß║½n nhau"], ans:2},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü kh├íi niß╗çm m├┤ h├¼nh CSDL Client-Server:", opts:["C├íc m├íy kh├ích chia sß║╗ xß╗¡ l├╜ th├┤ng tin","Khi m├íy kh├ích thß╗▒c hiß╗çn c├íc ß╗⌐ng dß╗Ñng, n├│ gß╗¡i y├¬u cß║ºu vß╗ü m├íy chß╗º ─æ╞░ß╗úc kß║┐t nß╗æi vß╗¢i c╞í sß╗ƒ dß╗» liß╗çu, m├íy chß╗º xß╗¡ l├╜ v├á gß╗¡i trß║ú lß║íi kß║┐t quß║ú vß╗ü m├íy kh├ích","M├íy chß╗º v├á m├íy kh├ích c├│ quyß╗ün truy xuß║Ñt c╞í sß╗ƒ dß╗» liß╗çu","M├íy kh├ích truy xuß║Ñt c╞í sß╗ƒ dß╗» liß╗çu tr├¬n m├íy chß╗º qua m├┤i tr╞░ß╗¥ng mß║íng"], ans:1},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü ─æß║╖c tr╞░ng cß╗ºa mß╗Öt m├┤ h├¼nh dß╗» liß╗çu:", opts:["Sß╗¡ dß╗Ñng ng├┤n ngß╗» bß║¡c cao ─æß╗â biß╗âu diß╗àn c├íc ph├⌐p to├ín tr├¬n c╞í sß╗ƒ dß╗» liß╗çu","M├┤ h├¼nh c├│ cß║Ñu tr├║c ─æ╞ín giß║ún, c├│ c├ích nh├¼n trong suß╗æt ─æß╗æi vß╗¢i ng╞░ß╗¥i sß╗¡ dß╗Ñng","Phß║úi kiß╗âm tra t├¡nh d╞░ thß╗½a","C├│ t├¡nh ß╗òn ─æß╗ïnh khi thiß║┐t kß║┐, ─æ╞ín giß║ún, dß╗à thao t├íc. C├│ t├¡nh ─æß╗æi xß╗⌐ng v├á c├│ c╞í sß╗ƒ l├╜ thuyß║┐t vß╗»ng chß║»c"], ans:3},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["CSDL l├á tß║¡p bß║úng v├á mß╗ùi bß║úng l├á mß╗Öt cß║Ñu tr├║c hai chiß╗üu","Dß╗» liß╗çu ─æ╞░ß╗úc ng╞░ß╗¥i sß╗¡ dß╗Ñng nh├¼n d╞░ß╗¢i dß║íng mß╗Öt quan hß╗ç to├ín hß╗ìc v├á c├íc ph├⌐p to├ín thao t├íc dß╗» liß╗çu ─æ╞░ß╗úc x├óy dß╗▒ng tr├¬n c├íc cß║Ñu tr├║c quan hß╗ç to├ín hß╗ìc","Dß╗» liß╗çu ─æ╞░ß╗úc ng╞░ß╗¥i sß╗¡ dß╗Ñng nh├¼n d╞░ß╗¢i dß║íng mß╗Öt cß║Ñu tr├║c h├¼nh c├óy","Gß╗ôm nhiß╗üu tß╗çp dß╗» liß╗çu c├│ cß║Ñu tr├║c x├íc ─æß╗ïnh"], ans:1},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü ng├┤n ngß╗» dß╗» liß╗çu thao t├íc tr├¬n quan hß╗ç:", opts:["Ng├┤n ngß╗» con dß╗» liß╗çu biß║┐u diß╗àn dß╗» liß╗çu mß╗Öt c├ích duy nhß║Ñt","L├á tß║¡p c├íc ph├⌐p to├ín thao t├íc tr├¬n c├íc dß╗» liß╗çu d╞░ß╗¢i dß║íng quan hß╗ç","Ng├┤n ngß╗» con dß╗» liß╗çu li├¬n kß║┐t c├íc thß╗▒c thß╗â dß╗» liß╗çu quan hß╗ç","Ng├┤n ngß╗» con dß╗» liß╗çu gß╗ôm nh├│m c├íc ph├⌐p to├ín t├¼m kiß║┐m v├á cß║¡p nhß║¡t, l╞░u trß╗», thao t├íc tr├¬n c├íc quan hß╗ç"], ans:3},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["C├íc c├óu hß╗Åi t├¼m kiß║┐m kh├┤ng ─æß╗æi xß╗⌐ng","C├íc ph├⌐p to├ín l╞░u trß╗» c├│ khß║ú n─âng xß╗¡ l├╜ tß║¡p hß╗úp theo l├┤, kß║┐t quß║ú l├á quan hß╗ç","Kß║┐t quß║ú cß╗ºa c├íc ph├⌐p t├¼m kiß║┐m l├á mß╗Öt quan hß╗ç","C├íc ph├⌐p l╞░u trß╗» l├ám mß║Ñt ─æi sß╗▒ nhß║Ñt qu├ín v├á t├¡nh to├án vß║╣n dß╗» liß╗çu"], ans:1},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü mß╗æi li├¬n kß║┐t giß╗»a c├íc thß╗▒c thß╗â trong m├┤ h├¼nh thß╗▒c thß╗â quan hß╗ç:", opts:["Mß╗æi quan hß╗ç giß╗»a c├íc thß╗▒c thß╗â chß╗ë c├│ thß╗â l├á mß╗Öt-mß╗Öt hoß║╖c mß╗Öt-nhiß╗üu","Mß╗æi quan hß╗ç giß╗»a c├íc thß╗▒c thß╗â c├│ thß╗â l├á mß╗Öt-mß╗Öt, mß╗Öt-nhiß╗üu v├á nhiß╗üu-nhiß╗üu","Trong l╞░ß╗úc ─æß╗ô quan hß╗ç, cß║Ñu tr├║c dß╗» liß╗çu nhiß╗üu-nhiß╗üu kh├┤ng thß╗â chuyß╗ân vß╗ü dß║íng mß╗Öt-nhiß╗üu","Thß╗▒c thß╗â l├á nhß╗»ng ─æß╗æi t╞░ß╗úng dß╗» liß╗çu c╞í bß║ún chß╗⌐a nß╗Öi dung c├íc th├┤ng tin"], ans:1},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü c├íc b╞░ß╗¢c triß╗ân khai m├┤ h├¼nh thß╗▒c thß╗â quan hß╗ç:", opts:["X├íc ─æß╗ïnh nß╗Öi dung, y├¬u cß║ºu cß╗ºa c├íc thß╗▒c thß╗â","Ph├ón t├¡ch y├¬u cß║ºu, x├íc ─æß╗ïnh c├íc thß╗▒c thß╗â v├á c├íc mß╗æi li├¬n kß║┐t, t├¡ch hß╗úp y├¬u cß║ºu, chuyß╗ân ─æß╗òi vß╗ü c├íc quan hß╗ç, chuß║⌐n ho├í dß╗» liß╗çu v├á thiß║┐t kß║┐ vß║¡t l├╜","M├┤ tß║ú th├┤ng tin vß╗ü c├íc ─æß╗æi t╞░ß╗úng v├á x├íc ─æß╗ïnh mß╗æi quan hß╗ç giß╗»a c├íc ─æß╗æi t╞░ß╗úng cß║ºn thiß║┐t kß║┐","Ph├ón t├¡ch y├¬u cß║ºu, x├íc ─æß╗ïnh c├íc thß╗▒c thß╗â, chuß║⌐n ho├í dß╗» liß╗çu v├á thiß║┐t kß║┐ vß║¡t l├╜"], ans:1},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["Chuß║⌐n ho├í dß╗» liß╗çu dß╗▒a tr├¬n c├íc kh├íi niß╗çm phß╗Ñ thuß╗Öc h├ám","Phß╗Ñ thuß╗Öc h├ám m├┤ tß║ú c├íc ph╞░╞íng ph├íp biß╗âu diß╗àn dß╗» liß╗çu","Phß╗Ñ thuß╗Öc h├ám m├┤ tß║ú c├íc r├áng buß╗Öc trong c╞í sß╗ƒ dß╗» liß╗çu","C├íc ph╞░╞íng ph├íp chuß║⌐n ho├í dß╗» liß╗çu"], ans:0},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["X x├íc ─æß╗ïnh Y nß║┐u c├íc gi├í trß╗ï cß╗ºa X x├íc ─æß╗ïnh c├íc gi├í trß╗ï cß╗ºa Y","X x├íc ─æß╗ïnh Y nß║┐u r v├á s tr├╣ng nhau tr├¬n X th├¼ c┼⌐ng tr├╣ng nhau tr├¬n Y","X->Y, (r, s Γêê R) (r(X) = s(Y)) th├¼ suy ra r(X) = s(Y)","(r, s Γêê R) ((a Γêê X) (r(a) = s(a)) th├¼ suy ra (b Γêê Y) (r(b) = s(b)))"], ans:3},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü c├íc phß╗Ñ thuß╗Öc h├ám phß║ún xß║í:", opts:["Phß╗Ñ thuß╗Öc m├á vß║┐ tr├íi ─æ╞░ß╗úc chß╗⌐a trong vß║┐ phß║úi","Vß╗¢i mß╗ìi B l├á Con cß╗ºa A => A -> B","Phß╗Ñ thuß╗Öc m├á vß║┐ phß║úi ─æ╞░ß╗úc chß╗⌐a trong vß║┐ tr├íi","Phß╗Ñ thuß╗Öc v├áo ╬⌐, kh├┤ng phß╗Ñ thuß╗Öc v├áo F"], ans:2},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["Sß╗æ ─æiß╗çn thoß║íi -> M├ú v├╣ng l├á phß╗Ñ thuß╗Öc phß║ún xß║í","Sß╗æ ─æiß╗çn thoß║íi -> Hß╗ì t├¬n thu├¬ bao l├á phß╗Ñ thuß╗Öc phß║ún xß║í","(Sß╗æ thß╗⌐ tß╗▒, M├ú lß╗¢p) -> M├ú lß╗¢p l├á phß╗Ñ thuß╗Öc phß║ún xß║í","Sß╗æ chß╗⌐ng minh th╞░ -> Hß╗ì t├¬n l├á phß╗Ñ thuß╗Öc phß║ún xß║í"], ans:2},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü c├íc phß╗Ñ thuß╗Öc h├ám gia t─âng:", opts:["C├│ thß╗â mß╗ƒ rß╗Öng vß║┐ tr├íi hoß║╖c cß║ú hai vß║┐ phß╗Ñ thuß╗Öc h├ám c├╣ng mß╗Öt thuß╗Öc t├¡nh","A -> B => A -> BC","A -> B => AC -> B v├á A -> BC","C├│ thß╗â mß╗ƒ rß╗Öng vß║┐ tr├íi, kh├┤ng mß╗ƒ rß╗Öng vß║┐ phß║úi"], ans:2},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü phß╗Ñ thuß╗Öc bß║»c cß║ºu:", opts:["Nß║┐u A -> B v├á B -> C th├¼ suy ra AC -> BC","Nß║┐u A -> B v├á B -> C suy ra A -> C","Nß║┐u mß╗Öt thuß╗Öc t├¡nh x├íc ─æß╗ïnh thuß╗Öc t├¡nh thß╗⌐ hai, hoß║╖c x├íc ─æß╗ïnh thuß╗Öc t├¡nh thß╗⌐ ba, khi ─æ├│ thuß╗Öc t├¡nh thß╗⌐ nhß║Ñt x├íc ─æß╗ïnh thuß╗Öc t├¡nh thß╗⌐ 3","Nß║┐u mß╗Öt thuß╗Öc t├¡nh x├íc ─æß╗ïnh thuß╗Öc t├¡nh thß╗⌐ hai th├¼ n├│ x├íc ─æß╗ïnh thuß╗Öc t├¡nh thß╗⌐ ba"], ans:1},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["A -> B v├á BC -> Z => AC -> Z","AC -> B v├á B -> Z => AC -> Z","A -> B v├á B -> Z => AC -> Z","A -> BC v├á BC -> Z => AC -> Z"], ans:1},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["T├¬n thu├¬ bao -> Sß╗æ ─æiß╗çn thoß║íi thu├¬ bao","A -> B v├á A -> C => A -> BC","A -> B v├á A -> C => B -> BC","AA -> AB v├á AA -> C, suy ra A -> BC"], ans:1},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["Thuß╗Öc t├¡nh vß║┐ phß║úi sß║╜ x├íc ─æß╗ïnh c├íc th├ánh phß║ºn trong vß║┐ tr├íi","Thuß╗Öc t├¡nh vß║┐ tr├íi sß║╜ x├íc ─æß╗ïnh c├íc th├ánh phß║ºn trong vß║┐ phß║úi","Thuß╗Öc t├¡nh vß║┐ tr├íi c├│ mß║╖t trong vß║┐ phß║úi","Thuß╗Öc t├¡nh vß║┐ tr├íi sß║╜ x├íc ─æß╗ïnh c├íc th├ánh phß║ºn trong vß║┐ phß║úi"], ans:1},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü c├íc phß╗Ñ thuß╗Öc ─æß║ºy ─æß╗º:", opts:["C├íc thuß╗Öc t├¡nh vß║┐ phß║úi kh├┤ng x├íc ─æß╗ïnh vß║┐ tr├íi","C├íc thuß╗Öc t├¡nh vß║┐ tr├íi kh├┤ng x├íc ─æß╗ïnh c├íc thuß╗Öc t├¡nh thuß╗Öc vß║┐ phß║úi","C├íc thuß╗Öc t├¡nh vß║┐ tr├íi x├íc ─æß╗ïnh vß║┐ phß║úi","C├íc thuß╗Öc t├¡nh vß║┐ tr├íi kh├┤ng x├íc ─æß╗ïnh vß║┐ phß║úi"], ans:2},
  {q:"Phß╗Ñ thuß╗Öc n├áo sau ─æ├óy l├á phß╗Ñ thuß╗Öc ─æß║ºy ─æß╗º:", opts:["(M├ú nh├ón vi├¬n, t├¬n nh├ón vi├¬n) x├íc ─æß╗ïnh ─æ╞ín vß╗ï c├┤ng t├íc","(Sß╗æ thß╗⌐ tß╗▒, ─æ╞ín vß╗ï) x├íc ─æß╗ïnh sß╗æ thß╗⌐ tß╗▒ trong bß║úng l╞░╞íng","M├ú nh├ón vi├¬n x├íc ─æß╗ïnh qu├í tr├¼nh c├┤ng t├íc nh├ón vi├¬n ─æ├│","Sß╗æ thß╗⌐ tß╗▒ x├íc ─æß╗ïnh tiß╗ün l╞░╞íng cß╗ºa mß╗Öt nh├ón vi├¬n"], ans:2},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü bao ─æ├│ng c├íc thuß╗Öc t├¡nh:", opts:["Hß╗úp tß║Ñt cß║ú vß║┐ phß║úi cß╗ºa c├íc phß╗Ñ thuß╗Öc h├ám","Bao ─æ├│ng cß╗ºa X ß╗⌐ng vß╗¢i tß║¡p F l├á hß╗úp cß╗ºa vß║┐ tr├íi cß╗ºa c├íc phß╗Ñ thuß╗Öc h├ám","Bao ─æ├│ng cß╗ºa X ß╗⌐ng vß╗¢i tß║¡p F l├á hß╗úp cß╗ºa vß║┐ phß║úi cß╗ºa c├íc phß╗Ñ thuß╗Öc h├ám","Th├┤ng tin vß╗ü ─æß╗æi t╞░ß╗úng"], ans:2},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü tß║¡p t╞░╞íng ─æ╞░╞íng:", opts:["Tß║¡p G l├á tß║¡p con cß╗ºa F","C├íc phß╗Ñ thuß╗Öc cß╗ºa G l├á c├íc phß╗Ñ thuß╗Öc cß╗ºa F","C├íc phß╗Ñ thuß╗Öc cß╗ºa F ─æ╞░ß╗úc suy dß║½n logic tß╗½ G v├á c├íc phß╗Ñ thuß╗Öc cß╗ºa G ─æ╞░ß╗úc suy dß║½n logic tß╗½ F","C├íc phß╗Ñ thuß╗Öc cß╗ºa F c┼⌐ng l├á c├íc phß╗Ñ thuß╗Öc cß╗ºa G v├á ng╞░ß╗úc lß║íi"], ans:2},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü thuß╗Öc t├¡nh d╞░ thß╗½a:", opts:["A1A2 -> B, A1 d╞░ thß╗½a khi A2 -> B","A1A2 -> B, A1 d╞░ thß╗½a khi A1A2 -> B phß╗Ñ thuß╗Öc ─æß║ºy ─æß╗º","A1A2 -> B, A1 d╞░ thß╗½a khi A2 -> B phß╗Ñ thuß╗Öc ─æß║ºy ─æß╗º","A1A2 -> B, A1 d╞░ thß╗½a khi A2 kh├┤ng x├íc ─æß╗ïnh B"], ans:0},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt vß╗¢i F={X->Z, XY->WP, XY->ZWQ, XZ->R}:", opts:["Vß║┐ tr├íi cß╗ºa X -> Z c├│ chß╗⌐a thuß╗Öc t├¡nh d╞░ thß╗½a","Vß║┐ tr├íi cß╗ºa XY -> WP c├│ chß╗⌐a thuß╗Öc t├¡nh d╞░ thß╗½a","Vß║┐ tr├íi cß╗ºa XZ -> R c├│ chß╗⌐a thuß╗Öc t├¡nh d╞░ thß╗½a","Vß║┐ tr├íi cß╗ºa XY -> WP c├│ chß╗⌐a thuß╗Öc t├¡nh d╞░ thß╗½a"], ans:1},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["Phß╗Ñ thuß╗Öc c├│ vß║┐ tr├íi d╞░ thß╗½a l├á phß╗Ñ thuß╗Öc bß║»c cß║ºu","Phß╗Ñ thuß╗Öc d╞░ thß╗½a c├│ thß╗â l├á phß╗Ñ thuß╗Öc c├│ vß║┐ tr├íi d╞░ thß╗½a","Phß╗Ñ thuß╗Öc c├│ vß║┐ tr├íi d╞░ thß╗½a l├á phß╗Ñ thuß╗Öc ─æß║ºy ─æß╗º","Phß╗Ñ thuß╗Öc d╞░ thß╗½a l├á phß╗Ñ thuß╗Öc c├│ vß║┐ tr├íi d╞░ thß╗½a"], ans:1},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü kho├í cß╗ºa l╞░ß╗úc ─æß╗ô quan hß╗ç:", opts:["Gi├í trß╗ï cß╗ºa mß╗ùi thuß╗Öc t├¡nh c├│ thß╗â x├íc ─æß╗ïnh duy nhß║Ñt gi├í trß╗ï c├íc thuß╗Öc t├¡nh kh├íc","Kho├í gß╗ôm nhiß╗üu thuß╗Öc t├¡nh c├│ khß║ú n─âng biß╗âu diß╗àn c├íc thuß╗Öc kh├íc","Gi├í trß╗ï cß╗ºa mß╗Öt hay nhiß╗üu thuß╗Öc t├¡nh c├│ thß╗â x├íc ─æß╗ïnh duy nhß║Ñt gi├í trß╗ï c├íc thuß╗Öc t├¡nh kh├íc kß╗â cß║ú gi├í trß╗ï null","Kho├í l├á mß╗Öt thuß╗Öc t├¡nh hay mß╗Öt tß║¡p c├íc thuß╗Öc t├¡nh c├│ khß║ú n─âng biß╗âu diß╗àn duy nhß║Ñt c├íc thuß╗Öc t├¡nh c├▓n lß║íi"], ans:3},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["X l├á kh├│a nß║┐u: X+ = ╬⌐ v├á (X - A)+ = ╬⌐","C├íc thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc ─æß║ºy ─æß╗º v├áo kh├│a","Mß╗ùi mß╗Öt gi├í trß╗ï cß╗ºa kho├í x├íc ─æß╗ïnh c├íc gi├í trß╗ï cß╗ºa c├íc thuß╗Öc t├¡nh kh├┤ng kho├í","Gi├í trß╗ï c├íc kho├í c├│ thß╗â tr├╣ng nhau"], ans:0},
  {q:"F:={AB->C, D->EG, C->A, BE->C, BC->D, CG->BD, ACD->B, CE->AG}:", opts:["EB, CE, BC kh├┤ng l├á kh├│a cß╗ºa l╞░ß╗úc ─æß╗ô quan hß╗ç","EC, CE, BC kh├│a cß╗ºa l╞░ß╗úc ─æß╗ô quan hß╗ç","AB, CG, CD kh├┤ng l├á kh├│a cß╗ºa l╞░ß╗úc ─æß╗ô quan hß╗ç","AB, CG, CD kh├│a cß╗ºa l╞░ß╗úc ─æß╗ô quan hß╗ç"], ans:3},
  {q:"╬⌐={A,B,C,D,E,G}, F={B->C, C->B, A->GD}, kho├í quan hß╗ç l├á:", opts:["ACE","ABC","AC","AB"], ans:0},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["Chuß║⌐n ho├í dß╗» liß╗çu l├á qu├í tr├¼nh thß╗▒c hiß╗çn c├íc ph├⌐p l╞░u trß╗»","Dß╗» liß╗çu l╞░u trß╗» trong CSDL phß║ún ß║únh t├¡nh to├án vß║╣n dß╗» liß╗çu","Chuß║⌐n ho├í dß╗» liß╗çu l├á qu├í tr├¼nh t├ích quan hß╗ç kh├┤ng l├ám tß╗òn thß║Ñt th├┤ng tin","Quan hß╗ç gß╗æc ─æ╞░ß╗úc chß╗⌐a trong quan hß╗ç kß║┐t nß╗æi tß╗▒ nhi├¬n cß╗ºa c├íc quan hß╗ç chiß║┐u"], ans:2},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi t├ích quan hß╗ç:", opts:["─Éß║úm bß║úo t├¡nh to├án vß║╣n dß╗» liß╗çu","─Éß║úm bß║úo t├¡nh ─æß╗Öc lß║¡p dß╗» liß╗çu","L├ám tß╗òn thß║Ñt th├┤ng tin","Kh├┤ng l├ám tß╗òn thß║Ñt th├┤ng tin"], ans:3},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi t├ích - kß║┐t nß╗æi kh├┤ng tß╗òn thß║Ñt th├┤ng tin:", opts:["Quan hß╗ç R ─æ╞░ß╗úc kh├┤i phß╗Ñc tß╗½ ph├⌐p kß║┐t nß╗æi tß╗▒ nhi├¬n c├íc quan hß╗ç chiß║┐u","Th├┤ng tin cß╗ºa R c├│ thß╗â nhß║¡n ─æ╞░ß╗úc tß╗½ c├íc quan hß╗ç chiß║┐u ß╗⌐ng vß╗¢i ph├⌐p t├ích j","Th├┤ng tin cß╗ºa R c├│ thß╗â nhß║¡n ─æ╞░ß╗úc tß╗½ c├íc quan hß╗ç kh├íc","Quan hß╗ç R ─æ╞░ß╗úc kh├┤i phß╗Ñc tß╗½ ph├⌐p kß║┐t nß╗æi c├íc quan hß╗ç chiß║┐u"], ans:0},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü mß╗Ñc ti├¬u:", opts:["T├ích quan hß╗ç l├á thß╗▒c hiß╗çn tß╗æi ╞░u truy vß║Ñn, t├¼m kiß║┐m","T├ích quan hß╗ç l├á thß╗▒c hiß╗çn tß╗æi ╞░u l╞░u trß╗», tiß║┐t kiß╗çm bß╗Ö nhß╗¢","T├ích quan hß╗ç l├á nhß║▒m ─æß║úm bß║úo t├¡nh ─æß╗Öc lß║¡p dß╗» liß╗çu","T├ích quan hß╗ç l├á l├ám giß║úm nhß║╣ t├¡nh to├ín"], ans:2},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["Khi thß╗▒c hiß╗çn ph├⌐p t├ích, quan hß╗ç gß╗æc bß╗ï tß╗òn thß║Ñt","Khi thß╗▒c hiß╗çn ph├⌐p t├ích, quan hß╗ç gß╗æc c├│ thß╗â bß╗ï tß╗òn thß║Ñt","Khi thß╗▒c hiß╗çn ph├⌐p t├ích, quan hß╗ç gß╗æc lu├┤n lu├┤n tß╗òn thß║Ñt","Khi thß╗▒c hiß╗çn ph├⌐p t├ích, quan hß╗ç gß╗æc kh├┤ng tß╗òn thß║Ñt"], ans:1},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["Khi thß╗▒c hiß╗çn c├íc ph├⌐p l╞░u trß╗» tr├¬n c├íc quan hß╗ç ch╞░a ─æ╞░ß╗úc chuß║⌐n ho├í th╞░ß╗¥ng xuß║Ñt hiß╗çn dß╗ï th╞░ß╗¥ng th├┤ng tin","Dß╗» liß╗çu trong c├íc quan hß╗ç kh├┤ng ─æß║úm bß║úo t├¡nh to├án vß║╣n","Trong dß╗» liß╗çu l╞░u trß╗» lu├┤n lu├┤n c├│ sß╗▒ d╞░ thß╗½a, kh├┤ng nhß║Ñt qu├ín dß╗» liß╗çu","Dß╗ï th╞░ß╗¥ng th├┤ng tin th╞░ß╗¥ng xuß║Ñt hiß╗çn khi thß╗▒c hiß╗çn truy vß║Ñn dß╗» liß╗çu"], ans:0},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["Chuß║⌐n ho├í l├á qu├í tr├¼nh loß║íi bß╗Å dß╗ï th╞░ß╗¥ng th├┤ng tin v├á kh├┤ng tß╗òn thß║Ñt th├┤ng tin","Chuß║⌐n ho├í l├á qu├í tr├¼nh t├ích dß╗» liß╗çu kh├┤ng l├ám tß╗òn thß║Ñt th├┤ng tin","Chuß║⌐n ho├í l├á qu├í tr├¼nh t├ích l╞░ß╗úc ─æß╗ô quan hß╗ç vß╗ü c├íc l╞░ß╗úc ─æß╗ô quan hß╗ç chuß║⌐n cao v├á kh├┤ng l├ám tß╗òn thß║Ñt th├┤ng tin","Chuß║⌐n ho├í l├á qu├í tr├¼nh loß║íi bß╗Å dß╗ï th╞░ß╗¥ng th├┤ng tin"], ans:2},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["Quan hß╗ç gß╗ôm: M├ú b├ío, t├¬n b├ío, gi├í b├ío v├á m├ú kh├ích ─æß║╖t mua l├á quan hß╗ç 2NF","Quan hß╗ç gß╗ôm: M├ú nh├ón vi├¬n, t├¬n, ─æß╗ïa chß╗ë l├á quan hß╗ç 2NF","Quan hß╗ç gß╗ôm: M├ú ho├í ─æ╞ín, m├ú kh├ích, m├ú mß║╖t h├áng l├á quan hß╗ç 2NF","Quan hß╗ç gß╗ôm: M├ú kh├ích, t├¬n kh├ích v├á m├ú b├ío, t├¬n b├ío l├á quan hß╗ç 2NF"], ans:1},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["Quan hß╗ç 1NF c├│ thß╗â chß╗⌐a c├íc thuß╗Öc t├¡nh kho├í kh├┤ng phß╗Ñ thuß╗Öc v├áo kho├í","Quan hß╗ç 1NF chß╗⌐a c├íc thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc v├áo kho├í","Quan hß╗ç 1NF chß╗⌐a c├íc thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc ─æß║ºy ─æß╗º v├áo kho├í","Quan hß╗ç 1NF kh├┤ng chß╗⌐a c├íc thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc v├áo kho├í"], ans:1},
  {q:"Cho ╬⌐ = {A, B, C} v├á F = {A -> C, A -> B}:", opts:["Kh├┤ng tß╗ôn tß║íi c├íc thuß╗Öc t├¡nh kh├┤ng kho├í","'{A, C}, {B, E}' l├á kho├í cß╗ºa quan hß╗ç tr├¬n","Quan hß╗ç tr├¬n c├│ dß║íng chuß║⌐n kh├┤ng 2NF","Tß╗ôn tß║íi c├íc thuß╗Öc t├¡nh kh├┤ng kho├í"], ans:3},
  {q:"Trong quan hß╗ç 2NF, cß║Ñm tß║Ñt cß║ú c├íc phß╗Ñ thuß╗Öc kh├┤ng ─æß║ºy ─æß╗º:", opts:["Trong quan hß╗ç 2NF, cß║Ñm tß║Ñt cß║ú c├íc phß╗Ñ thuß╗Öc kh├┤ng ─æß║ºy ─æß╗º v├áo kho├í","Trong quan hß╗ç 2NF, cß║Ñm tß║Ñt cß║ú c├íc phß╗Ñ thuß╗Öc ─æß║ºy ─æß╗º v├áo kho├í","Trong quan hß╗ç 2NF, c├íc thuß╗Öc t├¡nh kho├í phß╗Ñ thuß╗Öc v├áo c├íc tß║¡p con cß╗ºa kho├í","Trong quan hß╗ç 2NF, c├íc thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc v├áo kho├í"], ans:0},
  {q:"Trong quan hß╗ç 3NF:", opts:["Trong quan hß╗ç 3NF, c├íc thuß╗Öc t├¡nh kh├┤ng kho├í bß║▒ng rß╗ùng","Trong quan hß╗ç 3NF, cß║Ñm c├íc thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc v├áo thuß╗Öc t├¡nh c├│ bao ─æ├│ng kh├íc ╬⌐","Trong quan hß╗ç 3NF, cß║Ñm thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc v├áo c├íc thuß╗Öc t├¡nh c├│ bao ─æ├│ng bß║▒ng ╬⌐","Trong quan hß╗ç 3NF, c├íc thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc h├ám v├áo thuß╗Öc t├¡nh c├│ bao ─æ├│ng kh├íc ╬⌐"], ans:2},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi khß║úo s├ít quan hß╗ç gß╗ôm c├íc thuß╗Öc t├¡nh: M├ú c├íp, t├¬n c├íp, gi├í, m├ú n╞░ß╗¢c sß║ún xuß║Ñt, n╞░ß╗¢c sß║ún xuß║Ñt (lß║ºn 2):", opts:["L├á quan hß╗ç 2NF v├á kh├┤ng chß╗⌐a c├íc phß╗Ñ thuß╗Öc bß║»c cß║ºu","L├á quan hß╗ç 3NF, kh├┤ng phß║úi l├á quan hß╗ç 2NF","L├á quan hß╗ç 3NF","Tß╗ôn tß║íi phß╗Ñ thuß╗Öc m├á vß║┐ phß║úi v├á tr├íi kh├┤ng phß║úi l├á thuß╗Öc t├¡nh kho├í"], ans:3},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["T├ích mß╗Öt quan hß╗ç kh├┤ng 3NF th├ánh nhiß╗üu quan hß╗ç 3NF, tß╗òn thß║Ñt th├┤ng tin","Tß╗½ mß╗Öt quan hß╗ç 2NF t├ích th├ánh nhiß╗üu quan hß╗ç 3NF","T├ích mß╗Öt quan hß╗ç th├ánh nhiß╗üu quan hß╗ç 3NF, kh├┤ng mß║Ñt th├┤ng tin","Tß╗½ mß╗Öt quan hß╗ç 2NF t├ích th├ánh nhiß╗üu quan hß╗ç 3NF, kh├┤ng l├ám mß║Ñt th├┤ng tin"], ans:3},
  {q:"X├⌐t quan hß╗ç ╬⌐ = {A, B, C, D, E, G, H} v├á F = {C -> AB, D -> E, B -> G}:", opts:["Kho├í quan hß╗ç l├á {B, C, A}","Quan hß╗ç c├│ dß║íng chuß║⌐n 3NF","Kho├í quan hß╗ç l├á {H, C, D}","Tß║Ñt cß║ú ─æß╗üu sai"], ans:2},
  {q:"CREATE TABLE trong SQL:", opts:["CREATE TABLE m├┤ tß║ú c├íc thuß╗Öc t├¡nh","CREATE TABLE m├┤ tß║ú quan hß╗ç v├á c├íc thuß╗Öc t├¡nh","CREATE TABLE m├┤ tß║ú quan hß╗ç","CREATE TABLE m├┤ tß║ú c├íc phß╗Ñ thuß╗Öc h├ám"], ans:1},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü ph├⌐p UNION:", opts:["Thuß╗Öc t├¡nh cß╗ºa quan hß╗ç hß╗úp l├á hß╗úp c├íc thuß╗Öc t├¡nh cß╗ºa c├íc quan hß╗ç nguß╗ôn","C├íc bß╗Ö cß╗ºa quan hß╗ç hß╗úp l├á hß╗úp c├íc bß╗Ö cß╗ºa c├íc quan hß╗ç nguß╗ôn","Hß╗úp cß╗ºa 2 quan hß╗ç khß║ú hß╗úp l├á mß╗Öt quan hß╗ç khß║ú hß╗úp vß╗¢i c├íc quan hß╗ç nguß╗ôn","Hß╗úp cß╗ºa 2 quan hß╗ç l├á mß╗Öt quan hß╗ç khß║ú hß╗úp vß╗¢i c├íc quan hß╗ç nguß╗ôn"], ans:1},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü ph├⌐p giao:", opts:["Thuß╗Öc t├¡nh cß╗ºa quan hß╗ç giao l├á giao c├íc thuß╗Öc t├¡nh cß╗ºa c├íc quan hß╗ç nguß╗ôn","Giao cß╗ºa c├íc quan hß╗ç l├á mß╗Öt quan hß╗ç","C├íc bß╗Ö cß╗ºa quan hß╗ç giao l├á giao c├íc bß╗Ö cß╗ºa c├íc quan hß╗ç nguß╗ôn","Giao cß╗ºa c├íc quan hß╗ç khß║ú hß╗úp l├á mß╗Öt quan hß╗ç khß║ú hß╗úp"], ans:3},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü ph├⌐p trß╗½:", opts:["Hiß╗çu cß╗ºa c├íc quan hß╗ç c┼⌐ng l├á quan hß╗ç","C├íc bß╗Ö quan hß╗ç kß║┐t quß║ú l├á c├íc bß╗Ö cß╗ºa c├íc quan hß╗ç nguß╗ôn","C├íc quan hß╗ç tham gia ph├⌐p trß╗½ kh├┤ng cß║ºn phß║úi khß║ú hß╗úp","Hiß╗çu cß╗ºa c├íc quan hß╗ç khß║ú hß╗úp c┼⌐ng l├á quan hß╗ç khß║ú hß╗úp"], ans:3},
  {q:"C├óu hß╗Åi truy vß║Ñn c├│ thß╗â biß╗âu diß╗àn bß║▒ng:", opts:["C├íc ph├⌐p to├ín ─æß║íi sß╗æ quan hß╗ç v├á c├óy quan hß╗ç","C├íc ph├⌐p to├ín ─æß║íi sß╗æ quan hß╗ç hoß║╖c c├óy quan hß╗ç","C├íc ph├⌐p to├ín ─æß║íi sß╗æ quan hß╗ç","C├óy ─æß║íi sß╗æ quan hß╗ç"], ans:1},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü ng├┤n ngß╗» con dß╗» liß╗çu SQL:", opts:["─É╞░ß╗úc x├óy dß╗▒ng tr├¬n c╞í sß╗ƒ ─æß║íi sß╗æ quan hß╗ç v├á c├íc ph├⌐p to├ín quan hß╗ç","L├á mß╗Öt ng├┤n ngß╗» lß║¡p tr├¼nh ─æß╗Öc lß║¡p","L├á ng├┤n ngß╗» con dß╗» liß╗çu cho tß║Ñt cß║ú c├íc kiß╗âu CSDL","L├á mß╗Öt ng├┤n ngß╗» lß║¡p tr├¼nh"], ans:0},
  {q:"C├íc ph├⌐p to├ín trong tß╗ò hß╗úp SELECT-FROM-WHERE:", opts:["T├¡ch c├íc quan hß╗ç trong mß╗çnh ─æß╗ü FROM, chß╗ìn theo biß╗âu thß╗⌐c sau WHERE v├á chiß║┐u tr├¬n c├íc thuß╗Öc t├¡nh sau mß╗çnh ─æß╗ü SELECT","T├¡ch c├íc quan hß╗ç trong mß╗çnh ─æß╗ü FROM, chiß║┐u trong WHERE v├á chß╗ìn tr├¬n c├íc thuß╗Öc t├¡nh sau mß╗çnh ─æß╗ü SELECT","Kß║┐t nß╗æi c├íc quan hß╗ç sau mß╗çnh ─æß╗ü FROM, chiß║┐u c├íc thuß╗Öc t├¡nh sau SELECT","Kß║┐t nß╗æi tß╗▒ nhi├¬n c├íc quan hß╗ç sau mß╗çnh ─æß╗ü SELECT, thoß║ú m├ún biß╗âu thß╗⌐c logic sau WHERE v├á chiß║┐u tr├¬n c├íc thuß╗Öc t├¡nh sau mß╗çnh ─æß╗ü FROM"], ans:0},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi thß╗▒c hiß╗çn truy vß║Ñn:", opts:["Thß╗▒c hiß╗çn ph├⌐p kß║┐t nß╗æi tß╗▒ nhi├¬n c├íc quan hß╗ç sau FROM","Thß╗▒c hiß╗çn ph├⌐p hß╗úp c├íc quan hß╗ç sau FROM","Thß╗▒c hiß╗çn ph├⌐p chiß║┐u tr├¬n sau mß╗çnh ─æß╗ü WHERE","Thß╗▒c hiß╗çn ph├⌐p chß╗ìn sau mß╗çnh ─æß╗ü WHERE"], ans:3},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["Ph├ón loß║íi theo c├íc cß╗Öt ─æ╞░ß╗úc m├┤ tß║ú sau GROUP BY","Sß║»p xß║┐p c├íc bß║ún ghi theo kho├í ─æ╞░ß╗úc m├┤ tß║ú sau GROUP BY","GROUP BY sß║╜ ph├ón hoß║ích quan hß╗ç th├ánh nhiß╗üu nh├│m t├ích biß╗çt nhau","GROUP BY sß║╜ chia dß╗ìc quan hß╗ç th├ánh nhiß╗üu nh├│m"], ans:2},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi thß╗▒c hiß╗çn ph├⌐p chiß║┐u:", opts:["Sau khi thß╗▒c hiß╗çn ph├⌐p chß╗ìn, ph├ón loß║íi","Sau khi thß╗▒c hiß╗çn ph├⌐p chß╗ìn, c├íc ph├⌐p theo nh├│m","Tr╞░ß╗¢c khi thß╗▒c hiß╗çn ph├⌐p chß╗ìn, c├íc ph├⌐p theo nh├│m","Tr╞░ß╗¢c khi thß╗▒c hiß╗çn ph├⌐p chß╗ìn, ph├ón loß║íi"], ans:1},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt:", opts:["Biß║┐n ─æß╗òi mß╗Öt biß╗âu thß╗⌐c ─æß║íi sß╗æ quan hß╗ç vß╗ü mß╗Öt biß╗âu thß╗⌐c t╞░╞íng ─æ╞░╞íng tß╗æi ╞░u","Biß║┐n ─æß╗òi c├íc biß╗âu thß╗⌐c ─æß║íi sß╗æ quan hß╗ç vß╗ü t╞░╞íng ─æ╞░╞íng","Biß║┐n ─æß╗òi mß╗Öt biß╗âu thß╗⌐c ─æß║íi sß╗æ quan hß╗ç vß╗¢i chi ph├¡ ├¡t h╞ín rß║Ñt nhiß╗üu","Biß║┐n ─æß╗òi c├íc biß╗âu thß╗⌐c ─æß║íi sß╗æ quan hß╗ç tß╗æi ╞░u l╞░u trß╗»"], ans:0},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt nhß║¡n x├⌐t khi thß╗▒c hiß╗çn tß╗æi ╞░u ho├í c├óu hß╗Åi:", opts:["Thß╗▒c hiß╗çn c├íc ph├⌐p chß╗ìn muß╗Ön h╞ín c├íc ph├⌐p chiß║┐u th╞░ß╗¥ng th├¼ tß╗æt h╞ín","Ph├⌐p chiß║┐u sß╗¢m giß║úm sß╗æ c├íc thuß╗Öc t├¡nh","C├íc ph├⌐p chß╗ìn sß╗¢m sß║╜ l├ám t─âng dß╗» liß╗çu","Thß╗▒c hiß╗çn c├íc ph├⌐p chß╗ìn c├áng sß╗¢m kh├┤ng tß╗æt h╞ín"], ans:1},
  {q:"Qu├í tr├¼nh tß╗æi ╞░u ho├í c├íc c├óu hß╗Åi truy vß║Ñn dß╗» liß╗çu l├á qu├í tr├¼nh:", opts:["Kß║┐t quß║ú cß╗ºa c├íc ph├⌐p to├ín ─æ╞░ß╗úc biß╗âu diß╗àn duy nhß║Ñt bß║▒ng mß╗Öt quan hß╗ç","Biß║┐n ─æß╗òi c├óu hß╗Åi sao cho chi ph├¡ thß╗¥i gian v├á sß╗¡ dß╗Ñng bß╗Ö nhß╗¢ l├á ├¡t nhß║Ñt","Chi ph├¡ thß╗¥i gian thß╗▒c hiß╗çn c├íc ph├⌐p to├ín l├á ├¡t nhß║Ñt","Cß║ºn thiß║┐t phß║úi biß║┐n ─æß╗òi c├íc c├óu hß╗Åi hß╗úp l├╜"], ans:1},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü an to├án CSDL:", opts:["Cß║ºn c├│ c╞í chß║┐ kiß╗âm so├ít, quß║ún l├╜ c╞í sß╗ƒ dß╗» liß╗çu","C├íc biß╗çn ph├íp bß║úo vß╗ç an to├án th├┤ng tin tr├¬n mß║íng","Cß║ºn c├│ c├íc biß╗çn ph├íp bß║úo vß╗ç chß╗æng truy nhß║¡p tr├íi ph├⌐p v├áo c╞í sß╗ƒ dß╗» liß╗çu","C├íc chiß║┐n l╞░ß╗úc truy nhß║¡p c╞í sß╗ƒ dß╗» liß╗çu"], ans:2},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü c├íc nguy c╞í kh├┤ng an to├án:", opts:["Nhiß╗üu ng╞░ß╗¥i sß╗¡ dß╗Ñng truy nhß║¡p v├á khai th├íc tr├¬n c├╣ng mß╗Öt c╞í sß╗ƒ dß╗» liß╗çu","Truy xuß║Ñt v├áo c╞í sß╗ƒ dß╗» liß╗çu bß║▒ng nhiß╗üu ng├┤n ngß╗» thao t├íc dß╗» liß╗çu kh├íc nhau","Nhiß╗üu ng╞░ß╗¥i trao ─æß╗òi th├┤ng tin vß╗¢i nhau tr├¬n mß║íng","Rß║Ñt nhiß╗üu loß║íi dß╗» liß╗çu ─æ╞░ß╗úc tß║úi vß╗ü l╞░u trß╗» tr├¬n c├íc m├íy chß╗º mß║íng cß╗Ñc bß╗Ö"], ans:0},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi n├│i vß╗ü c├íc biß╗çn ph├íp nhß║¡n diß╗çn ng╞░ß╗¥i sß╗¡ dß╗Ñng:", opts:["Cß║ºn cung cß║Ñp ph╞░╞íng tiß╗çn cho ng╞░ß╗¥i sß╗¡ dß╗Ñng","Cß║ºn x├íc ─æß╗ïnh c├íc thao t├íc ng╞░ß╗¥i sß╗¡ dß╗Ñng ─æ╞░ß╗úc ph├⌐p thß╗▒c hiß╗çn","Cung cß║Ñp c├íc ph╞░╞íng ph├íp truy nhß║¡p cho ng╞░ß╗¥i sß╗¡ dß╗Ñng","Cß║ºn x├íc ─æß╗ïnh c├íc thao t├íc cho bß║Ñt kß╗│ ng╞░ß╗¥i sß╗¡ dß╗Ñng"], ans:1},
  {q:"Khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng:", opts:["GRANT SELECT ON ACCOUNT","GRANT READ ON R","GRANT ALL ON R TO GROUP/WORLD","GRANT ON R TO GROUP/WORLD"], ans:2},
  {q:"Khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng khi n├│i vß╗ü thu hß╗ôi c├íc quyß╗ün truy nhß║¡p CSDL cß╗ºa ng╞░ß╗¥i sß╗¡ dß╗Ñng:", opts:["REVOKE GRANT OPTION FOR SELECT ON BRANCH FROM U1","REVOKE READ ON R FROM GROUP/WORLD","REVOKE SELECT ON BRANCH","REVOKE ON BRANCH FROM U1"], ans:0},
  {q:"T├¼m kiß║┐m v├á tra cß╗⌐u th├┤ng tin l├á chß╗⌐c n─âng quan trß╗ìng. Hß╗ç quß║ún trß╗ï c╞í sß╗ƒ dß╗» liß╗çu l├á ....... c├íc chiß║┐n l╞░ß╗úc truy nhß║¡p CSDL.", opts:["T├ái nguy├¬n th├┤ng tin","Hß╗ç thß╗æng c├íc m├íy chß╗º l╞░u trß╗» CSDL","Hß╗ç thß╗æng phß║ºn mß╗üm ─æiß╗üu khiß╗ân","Hß╗ç ─æiß╗üu h├ánh mß║íng"], ans:2},
  {q:"Trong c╞í sß╗ƒ dß╗» liß╗çu quan hß╗ç, mß╗æi quan hß╗ç giß╗»a c├íc thß╗▒c thß╗â c┼⌐ng l├á mß╗Öt loß║íi ......... ─æß║╖c biß╗çt.", opts:["C╞í sß╗ƒ dß╗» liß╗çu","Phß╗Ñ thuß╗Öc h├ám","─Éß╗æi t╞░ß╗úng dß╗» liß╗çu","Thß╗▒c thß╗â"], ans:3},
  {q:"Tß╗ò chß╗⌐c l╞░u trß╗» dß╗» liß╗çu theo l├╜ thuyß║┐t c╞í sß╗ƒ dß╗» liß╗çu c├│ thß╗â tr├ính ─æ╞░ß╗úc sß╗▒ kh├┤ng nhß║Ñt qu├ín trong l╞░u trß╗» dß╗» liß╗çu v├á bß║úo ─æß║úm ─æ╞░ß╗úc .......... cß╗ºa dß╗» liß╗çu.", opts:["T├¡nh to├án vß║╣n","T├¡nh ─æß╗Öc lß║¡p dß╗» liß╗çu","An to├án","Quyß╗ün truy nhß║¡p c╞í sß╗ƒ dß╗» liß╗çu"], ans:0},
  {q:"Ng╞░ß╗¥i quß║ún trß╗ï CSDL bß║úo ─æß║úm viß╗çc truy nhß║¡p CSDL. Kiß╗âm tra, kiß╗âm so├ít c├íc quyß╗ün truy nhß║¡p cß╗ºa ........ Ng─ân chß║╖n c├íc truy nhß║¡p tr├íi ph├⌐p.", opts:["Hß╗ç quß║ún trß╗ï c╞í sß╗ƒ dß╗» liß╗çu","Ng╞░ß╗¥i quß║ún trß╗ï c╞í sß╗ƒ dß╗» liß╗çu","Hß╗ç ß╗⌐ng dß╗Ñng","Ng╞░ß╗¥i sß╗¡ dß╗Ñng"], ans:3},
  {q:"M├┤ h├¼nh kiß║┐n tr├║c CSDL c├│ 3 mß╗⌐c, thß╗â hiß╗çn ............", opts:["T├¡nh nhß║Ñt qu├ín dß╗» liß╗çu","T├¡nh ─æ╞ín giß║ún thao t├íc dß╗» liß╗çu","T├¡nh to├án vß║╣n dß╗» liß╗çu","T├¡nh ─æß╗Öc lß║¡p dß╗» liß╗çu"], ans:3},
  {q:"C├│ rß║Ñt nhiß╗üu c├ích nh├¼n dß╗» liß╗çu ß╗ƒ m├┤ h├¼nh ngo├ái, nh╞░ng ..... biß╗âu diß╗àn to├án bß╗Ö th├┤ng tin trong CSDL l├á duy nhß║Ñt.", opts:["M├┤ h├¼nh quan niß╗çm","M├┤ h├¼nh kh├íi niß╗çm","M├┤ h├¼nh trong","M├┤ h├¼nh ngo├ái"], ans:0},
  {q:"Trong c╞í sß╗ƒ dß╗» liß╗çu, dß╗» liß╗çu chß╗ë ─æ╞░ß╗úc biß╗âu diß╗àn, m├┤ tß║ú ......... Cß║Ñu tr├║c l╞░u trß╗» dß╗» liß╗çu v├á c├íc hß╗ç ch╞░╞íng tr├¼nh ß╗⌐ng dß╗Ñng tr├¬n c├íc hß╗ç CSDL ─æß╗Öc lß║¡p vß╗¢i nhau.", opts:["R├╡ r├áng, logic","Mß╗Öt c├ích duy nhß║Ñt","Chß║╖t chß║╜, logic","Bß║▒ng nhiß╗üu c├ích kh├íc nhau"], ans:1},
  {q:"T├¡nh ─æß╗Öc lß║¡p dß╗» liß╗çu l├á '...... cuß║ú c├íc hß╗ç ß╗⌐ng dß╗Ñng ─æß╗æi vß╗¢i sß╗▒ thay ─æß╗òi trong cß║Ñu tr├║c l╞░u trß╗» v├á chiß║┐n l╞░ß╗úc truy nhß║¡p dß╗» liß╗çu' (lß║ºn 2).", opts:["Nß╗Öi dung th├┤ng tin","Ph╞░╞íng thß╗⌐c truy nhß║¡p","T├¡nh tß║Ñt biß║┐n","C├íc chiß║┐n l╞░ß╗úc truy nhß║¡p"], ans:2},
  {q:"C├│ rß║Ñt nhiß╗üu loß║íi r├áng buß╗Öc......", opts:["R├áng buß╗Öc logic","R├áng buß╗Öc giß║úi t├¡ch v├á phß╗Ñ thuß╗Öc h├ám","Phß╗Ñ thuß╗Öc h├ám","R├áng buß╗Öc vß╗ü kiß╗âu, r├áng buß╗Öc giß║úi t├¡ch v├á phß╗Ñ thuß╗Öc h├ám"], ans:3},
  {q:"Mß╗Öt m├┤ h├¼nh dß╗» liß╗çu l├á mß╗Öt hß╗ç thß╗æng h├¼nh thß╗⌐c to├ín hß╗ìc, bao gß╗ôm c├íc hß╗ç thß╗æng c├íc k├╜ hiß╗çu v├á tß║¡p hß╗úp c├íc ............. tr├¬n c╞í sß╗ƒ dß╗» liß╗çu.", opts:["C├íc ph├⌐p l╞░u trß╗» dß╗» liß╗çu","C├íc ph├⌐p t├¼m kiß║┐m, tra cß╗⌐u th├┤ng tin","Ph├⌐p to├ín thao t├íc","C├íc ph├⌐p to├ín ─æß║íi sß╗æ quan hß╗ç"], ans:2},
  {q:"Tß╗ò chß╗⌐c dß╗» liß╗çu theo m├┤ h├¼nh n├áo l├á tß╗æt nhß║Ñt phß╗Ñ thuß╗Öc v├áo y├¬u cß║ºu......... th├┤ng tin cß╗ºa tß╗ò chß╗⌐c quß║ún l├╜ n├│.", opts:["T├¼m kiß║┐m","Truy vß║Ñn","Cß║¡p nhß║¡t, bß╗ò sung, sß╗¡a ─æß╗òi","Truy xuß║Ñt v├á khai th├íc"], ans:3},
  {q:"Trong m├┤ h├¼nh CSDL ph├ón cß║Ñp, trong mß╗ùi mß╗Öt c├óy ............. v├á d╞░ß╗¢i n├│ l├á tß║¡p c├íc bß║ún ghi phß╗Ñ thuß╗Öc.", opts:["Chß╗ë chß╗⌐a mß╗Öt v├á chß╗ë mß╗Öt bß║ún ghi gß╗æc","Mß╗Öt bß║ún ghi gß╗æc v├á nhiß╗üu bß║ún ghi phß╗Ñ thuß╗Öc","Mß╗Öt bß║ún ghi gß╗æc v├á mß╗Öt bß║ún ghi phß╗Ñ thuß╗Öc","Nhiß╗üu bß║ún ghi gß╗æc"], ans:0},
  {q:"Trong cß║Ñu tr├║c h├¼nh c├óy, khi sß╗¡a ─æß╗òi mß╗Öt sß╗æ th├┤ng tin trong c├íc bß║ún ghi phß╗Ñ thuß╗Öc th├¼ phß║úi duyß╗çt to├án bß╗Ö m├┤ h├¼nh. Dß║½n ─æß║┐n sß╗▒ xuß║Ñt hiß╗çn ...........", opts:["To├án vß║╣n dß╗» liß╗çu trong l╞░u trß╗»","An to├án dß╗» liß╗çu","Kh├┤ng nhß║Ñt qu├ín dß╗» liß╗çu trong l╞░u trß╗»","Tß╗òn thß║Ñt th├┤ng tin"], ans:2},
  {q:"M├┤ h├¼nh dß╗» liß╗çu mß║íng l├á m├┤ h├¼nh thß╗▒c thß╗â quan hß╗ç, trong ─æ├│ c├íc mß╗æi li├¬n kß║┐t hß║ín chß║┐......... Kh├┤ng chß╗⌐a li├¬n kß║┐t nhiß╗üu - nhiß╗üu.", opts:["T├¡nh ─æß╗æi xß╗⌐ng","Trong kiß╗âu mß╗Öt kiß╗âu bß║ún ghi li├¬n kß║┐t","Trong kiß╗âu mß╗Öt - mß╗Öt v├á nhiß╗üu - mß╗Öt","Trong kiß╗âu mß╗Öt bß║ún ghi thß╗▒c thß╗â"], ans:2},
  {q:"Trong m├┤ h├¼nh CSDL mß║íng, dß╗» liß╗çu ─æ╞░ß╗úc biß╗âu diß╗àn trong .......bß║▒ng c├íc mß╗æi nß╗æi li├¬n kß║┐t tß║ío th├ánh mß╗Öt ─æß╗ô thß╗ï c├│ h╞░ß╗¢ng.", opts:["Trong kiß╗âu mß╗Öt - mß╗Öt v├á nhiß╗üu - mß╗Öt","C├íc bß║ún ghi li├¬n kß║┐t vß╗¢i nhau","C├íc bß║ún ghi thß╗▒c thß╗â","Trong kiß╗âu mß╗Öt bß║ún ghi thß╗▒c thß╗â"], ans:2},
  {q:"CSDL mß║íng biß╗âu diß╗àn dß╗» liß╗çu theo cß║Ñu tr├║c chß║╖t chß║╜. C├íc xuß║Ñt hiß╗çn kiß╗âu bß║ún ghi ─æ╞░ß╗úc........", opts:["Kß║┐t nß╗æi vß╗¢i nhau bß║▒ng c├íc xuß║Ñt hiß╗çn kiß╗âu bß║ún ghi li├¬n kß║┐t","L╞░u trß╗» nhß║Ñt qu├ín v├á to├án vß║╣n","M├┤ tß║ú chß║╖t chß║╜","Biß╗âu diß╗àn c├│ cß║Ñu tr├║c ─æß╗æi xß╗⌐ng"], ans:0},
  {q:"Cß║Ñu tr├║c dß╗» liß╗çu trong m├┤ h├¼nh CSDL mß║íng qu├í phß╗⌐c tß║íp v├¼ .......... V├¼ vß║¡y viß╗çc thiß║┐t kß║┐ v├á c├ái ─æß║╖t c╞í sß╗ƒ dß╗» liß╗çu mß║íng th╞░ß╗¥ng rß║Ñt kh├│ kh─ân.", opts:["M├┤ h├¼nh dß╗» liß╗çu mß║íng chß╗⌐a nhiß╗üu thß╗▒c thß╗â","M├┤ h├¼nh dß╗» liß╗çu mß║íng chß╗⌐a mß╗Öt thß╗▒c thß╗â","Qu├í nhiß╗üu li├¬n kß║┐t giß╗»a c├íc xuß║Ñt hiß╗çn dß╗» liß╗çu bß║▒ng c├íc xuß║Ñt hiß╗çn li├¬n kß║┐t","Mß╗æi li├¬n kß║┐t giß╗»a c├íc thß╗▒c thß╗â biß╗âu diß╗àn kh├┤ng t╞░ß╗¥ng minh"], ans:2},
  {q:"Quan hß╗ç l├á.......... cß╗ºa mß╗Öt hoß║╖c hß╗»u hß║ín c├íc miß╗ün. C├íc phß║ºn tß╗¡ cß╗ºa quan hß╗ç l├á c├íc bß╗Ö.", opts:["Kß║┐t quß║ú cß╗ºa ph├⌐p hß╗úp","Kß║┐t quß║ú cß╗ºa ph├⌐p chiß║┐u v├á chß╗ìn","Kß║┐t quß║ú cß╗ºa ph├⌐p chiß║┐u","Mß╗Öt tß║¡p con cß╗ºa t├¡ch ─Éß╗ü c├íc"], ans:3},
  {q:"C╞í sß╗ƒ dß╗» liß╗çu quan hß╗ç ─æ╞░ß╗úc biß╗âu diß╗àn........., c├íc cß╗Öt l├á thuß╗Öc t├¡nh v├á c├íc h├áng l├á tß║¡p n gi├í trß╗ï cß╗ºa thß╗▒c thß╗â, ─æß╗æi t╞░ß╗úng.", opts:["D╞░ß╗¢i dß║íng c├íc File dß╗» liß╗çu","Cß║Ñu tr├║c h├¼nh c├óy","D╞░ß╗¢i dß║íng c├íc bß║úng","Cß║Ñu tr├║c h├¼nh mß║íng"], ans:2},
  {q:"Ng├┤n ngß╗» dß╗» liß╗çu quan hß╗ç l├á.......... thao t├íc tr├¬n c├íc dß╗» liß╗çu d╞░ß╗¢i dß║íng quan hß╗ç. Dß╗» liß╗çu ─æ╞░ß╗úc biß╗âu diß╗àn mß╗Öt c├ích duy nhß║Ñt.", opts:["Ng├┤n ngß╗» biß╗âu diß╗àn dß╗» liß╗çu","Tß║¡p c├íc ph├⌐p to├ín sß╗æ hß╗ìc","Tß║¡p c├íc ph├⌐p to├ín c├│ c├íc cß║Ñu tr├║c quan hß╗ç","Ng├┤n ngß╗» m├┤ tß║ú c├íc thß╗▒c thß╗â v├á mß╗æi li├¬n kß║┐t c├íc thß╗▒c thß╗â"], ans:2},
  {q:"Trong CSDL quan hß╗ç, c├íc ph├⌐p to├ín l╞░u trß╗» l├á c├íc ph├⌐p ch├¿n th├¬m, sß╗¡a ─æß╗òi v├á loß║íi bß╗Å. Khi thao t├íc .......v├á ─æß║úm bß║úo t├¡nh nhß║Ñt qu├ín dß╗» liß╗çu v├á t├¡nh to├án vß║╣n dß╗» liß╗çu.", opts:["Kh├┤ng dß╗ï th╞░ß╗¥ng th├┤ng tin","Tß╗òn thß║Ñt th├┤ng tin","Bß║úo mß║¡t th├┤ng tin","─Éß╗Öc lß║¡p dß╗» liß╗çu"], ans:0},
  {q:"Cß║Ñu tr├║c dß╗» liß╗çu trong m├┤ h├¼nh CSDL quan hß╗ç ─æ╞ín giß║ún, th├┤ng tin vß╗ü c├íc thß╗▒c thß╗â v├á r├áng buß╗Öc cß╗ºa c├íc thß╗▒c thß╗â ............... trong c├íc bß║úng, trong suß╗æt vß╗¢i ng╞░ß╗¥i sß╗¡ dß╗Ñng.", opts:["─É╞░ß╗úc biß╗âu diß╗àn duy nhß║Ñt","─É╞░ß╗úc biß╗âu diß╗àn bß║▒ng nhiß╗üu c├ích kh├íc nhau","Cß║Ñu tr├║c ─æ╞ín giß║ún","M├┤ tß║ú logic"], ans:0},
  {q:"T├¡nh ─æß╗Öc lß║¡p dß╗» liß╗çu trong c├íc hß╗ç c╞í sß╗ƒ dß╗» liß╗çu quan hß╗ç cao, thß╗â hiß╗çn cß║Ñu tr├║c l╞░u trß╗» v├á chiß║┐n l╞░ß╗úc truy nhß║¡p c├│ thß╗â .........nh╞░ng kh├┤ng thay ─æß╗òi s╞í ─æß╗ô quan niß╗çm v├á ng╞░ß╗úc lß║íi.", opts:["Kh├┤ng thay ─æß╗òi","Thay ─æß╗òi","Phß╗Ñ thuß╗Öc lß║½n nhau","─Éß╗Öc lß║¡p lß║½n nhau"], ans:1},
  {q:"Trong CSDL quan hß╗ç, c├íc c├óu hß╗Åi ─æß╗æi xß╗⌐ng, kß║┐t quß║ú c┼⌐ng ─æß╗æi xß╗⌐ng v├á biß╗âu diß╗àn bß║▒ng ..........", opts:["Tß╗çp dß╗» liß╗çu","C├óy dß╗» liß╗çu","─Éß╗ô thß╗ï v├┤ h╞░ß╗¢ng","Quan hß╗ç"], ans:3},
  {q:"N├│i rß║▒ng A -> B ─æ╞░ß╗úc suy dß║½n tß╗½ F, nß║┐u ..........", opts:["Hai bß╗Ö bß║Ñt kß╗│ tr├╣ng nhau tr├¬n A th├¼ kh├íc nhau tr├¬n B","Hai bß╗Ö bß║Ñt kß╗│ thoß║ú tr├¬n A th├¼ thoß║ú tr├¬n B","Hai bß╗Ö bß║Ñt kß╗│ kh├íc nhau tr├¬n A th├¼ c┼⌐ng kh├íc nhau tr├¬n B","├üp dß╗Ñng li├¬n tiß║┐p c├íc hß╗ç ti├¬n ─æß╗ü Armstrong"], ans:3},
  {q:"Bao ─æ├│ng tß║¡p c├íc phß╗Ñ thuß╗Öc h├ám gß╗ôm c├íc phß╗Ñ thuß╗Öc.......", opts:["Bß║»c cß║ºu ─æ╞░ß╗úc suy dß║½n logic","─É╞░ß╗úc suy dß║½n bß║▒ng ─æß╗ïnh ngh─⌐a","─É╞░ß╗úc suy dß║½n bß║▒ng c├ích ├íp dß╗Ñng li├¬n tiß║┐p c├íc hß╗ç ti├¬n ─æß╗ü Armstrong","─Éß║ºy ─æß╗º ─æ╞░ß╗úc suy dß║½n logic"], ans:2},
  {q:"X -> Y (Y Γêê F) l├á phß╗Ñ thuß╗Öc h├ám ─æß║ºy ─æß╗º, khi v├á chß╗ë khi ..........", opts:["Mß╗ìi con thß╗▒c sß╗▒ cß╗ºa X x├íc ─æß╗ïnh Y","Tß║¡p con thß╗▒c sß╗▒ cß╗ºa X x├íc ─æß╗ïnh Y","Tß╗ôn tß║íi tß║¡p con cß╗ºa X x├íc ─æß╗ïnh Y","X kh├┤ng chß╗⌐a thuß╗Öc t├¡nh d╞░ thß╗½a"], ans:3},
  {q:"Trong mß╗Öt l╞░ß╗úc ─æß╗ô quan hß╗ç lu├┤n tß╗ôn tß║íi mß╗Öt hoß║╖c mß╗Öt tß║¡p c├íc thuß╗Öc t├¡nh c├│ khß║ú n─âng ........", opts:["Biß╗âu diß╗àn c├íc thuß╗Öc t├¡nh c├▓n lß║íi","Biß╗âu diß╗àn duy nhß║Ñt c├íc thuß╗Öc t├¡nh c├▓n lß║íi","Biß╗âu diß╗àn duy nhß║Ñt c├íc phß╗Ñ thuß╗Öc h├ám","Biß╗âu diß╗àn c├íc phß╗Ñ thuß╗Öc h├ám"], ans:1},
  {q:"Nß║┐u 2 bß╗Ö bß║Ñt kß╗│ tr├╣ng nhau tr├¬n c├íc th├ánh phß║ºn cß╗ºa kh├│a th├¼ .........", opts:["C┼⌐ng tr├╣ng nhau tr├¬n c├íc th├ánh phß║ºn cß╗ºa tß║Ñt cß║ú c├íc bß╗Ö","C┼⌐ng tr├╣ng nhau tr├¬n c├íc th├ánh phß║ºn kh├┤ng kh├│a","Kh├íc nhau tr├¬n c├íc th├ánh phß║ºn tß║Ñt cß║ú c├íc bß╗Ö","Kh├íc nhau tr├¬n c├íc th├ánh phß║ºn kh├┤ng kh├│a"], ans:1},
  {q:"Gi├í trß╗ï c├íc th├ánh phß║ºn cß╗ºa kho├í ......... (lß║ºn 2)", opts:["C├│ thß╗â nhß║¡n gi├í trß╗ï null hay c├íc gi├í trß╗ï kh├┤ng x├íc ─æß╗ïnh","Kh├┤ng thß╗â nhß║¡n gi├í trß╗ï null hay c├íc gi├í trß╗ï kh├┤ng x├íc ─æß╗ïnh","C├│ thß╗â nhß║¡n gi├í trß╗ï c├íc gi├í trß╗ï kh├┤ng x├íc ─æß╗ïnh","Kh├┤ng thß╗â nhß║¡n gi├í trß╗ï null v├á chß║Ñp nhß║¡n c├íc gi├í trß╗ï kh├┤ng x├íc ─æß╗ïnh"], ans:1},
  {q:"Tß╗½ mß╗Öt si├¬u kh├│a cho tr╞░ß╗¢c, c├│ thß╗â..........", opts:["X├íc ─æß╗ïnh mß╗Öt kh├│a trong n├│","X├íc ─æß╗ïnh mß╗Öt si├¬u kh├│a trong n├│","X├íc ─æß╗ïnh mß╗Öt nh├│m c├íc thuß╗Öc t├¡nh","X├íc ─æß╗ïnh mß╗Öt thuß╗Öc t├¡nh"], ans:0},
  {q:"Trong qu├í tr├¼nh chuß║⌐n ho├í dß╗» liß╗çu, cß║ºn thiß║┐t phß║úi thß╗▒c hiß╗çn c├íc ph├⌐p t├ích quan hß╗ç vß╗ü c├íc quan hß╗ç c├│ dß║íng chuß║⌐n cao .......", opts:["─Éß║úm bß║úo t├¡nh to├án vß║╣n dß╗» liß╗çu","V├á biß╗âu diß╗àn th├┤ng tin l├á duy nhß║Ñt","V├á kh├┤ng tß╗òn thß║Ñt th├┤ng tin","Kh├┤ng l├ám mß║Ñt ─æi t├¡nh ─æß╗Öc lß║¡p dß╗» liß╗çu"], ans:2},
  {q:"Ph├⌐p t├ích kh├┤ng tß╗òn thß║Ñt th├┤ng tin theo ngh─⌐a..........", opts:["Th├┤ng tin cß╗ºa quan hß╗ç gß╗æc ─æ╞░ß╗úc kh├┤i phß╗Ñc tß╗½ c├íc quan hß╗ç chiß║┐u","Ph├⌐p t├ích bß║úo to├án phß╗Ñ thuß╗Öc trong c├íc quan hß╗ç chiß║┐u","Ph├⌐p t├ích bß║úo ─æß║úm t├¡nh ─æß╗Öc lß║¡p dß╗» liß╗çu","Th├┤ng tin cß╗ºa quan hß╗ç gß╗æc kh├┤ng bß╗ï m├óu thuß║½n, thß╗½a hoß║╖c thiß║┐u"], ans:0},
  {q:"Chuß║⌐n ho├í dß╗» liß╗çu l├á qu├í tr├¼nh biß║┐n ─æß╗òi dß╗» liß╗çu th├ánh nhiß╗üu tß║¡p nhß╗Å h╞ín sao cho.........", opts:["Kh├┤ng r├╡ r├áng trong suy diß╗àn, bß║úo ─æß║úm t├¡nh to├án vß║╣n dß╗» liß╗çu","Tß╗æi thiß╗âu viß╗çc lß║╖p lß║íi, tr├ính sß╗▒ kh├┤ng r├╡ r├áng, nhß║¡p nhß║▒ng trong suy diß╗àn","C├íc quan hß╗ç th├ánh vi├¬n kh├┤ng tß╗òn thß║Ñt th├┤ng tin, ─æß║úm bß║úo t├¡nh ─æß╗Öc lß║¡p dß╗» liß╗çu","C├íc quan hß╗ç th├ánh vi├¬n c├│ cß║Ñu tr├║c ─æ╞ín giß║ún, kh├┤ng chß╗⌐a dß╗ï th╞░ß╗¥ng th├┤ng tin"], ans:3},
  {q:"Mß╗Öt m├┤ h├¼nh CSDL ─æ╞░ß╗úc coi l├á m├┤ h├¼nh chuß║⌐n ho├í tß╗æt, nß║┐u........", opts:["C├íc thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc h├ám v├áo kho├í","C├íc thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc h├ám ─æß║ºy ─æß╗º v├áo kho├í","C├íc thuß╗Öc t├¡nh kho├í x├íc ─æß╗ïnh duy nhß║Ñt","C├íc thuß╗Öc t├¡nh kh├┤ng kho├í kh├┤ng phß╗Ñ thuß╗Öc bß║»c cß║ºu v├áo kho├í"], ans:1},
  {q:"Trong c├íc quan hß╗ç dß║íng chuß║⌐n 1NF.....", opts:["Xuß║Ñt hiß╗çn c├íc thuß╗Öc t├¡nh phß╗Ñ thuß╗Öc ─æß║ºy ─æß╗º v├áo kho├í","Khi thao t├íc c├íc ph├⌐p l╞░u trß╗» xuß║Ñt hiß╗çn dß╗ï th╞░ß╗¥ng th├┤ng tin","Kh├┤ng xuß║Ñt hiß╗çn dß╗ï th╞░ß╗¥ng th├┤ng tin","Kh├┤ng xuß║Ñt hiß╗çn c├íc phß╗Ñ thuß╗Öc bß║»c cß║ºu v├áo kho├í"], ans:1},
  {q:"Nß║┐u quan hß╗ç l├á dß║íng chuß║⌐n 1NF v├á kh├┤ng tß╗ôn tß║íi c├íc phß╗Ñ thuß╗Öc h├ám sao cho thuß╗Öc t├¡nh vß║┐ tr├íi l├á mß╗Öt tß║¡p con thß╗▒c sß╗▒ cß╗ºa kh├│a v├á thuß╗Öc t├¡nh vß║┐ phß║úi ..........", opts:["L├á thuß╗Öc t├¡nh kh├┤ng kh├│a cß╗ºa quan hß╗ç","Phß╗Ñ thuß╗Öc h├ám v├áo thuß╗Öc t├¡nh kh├┤ng kho├í","L├á thuß╗Öc t├¡nh d╞░ thß╗½a vß║┐ tr├íi","Phß╗Ñ thuß╗Öc h├ám v├áo thuß╗Öc t├¡nh vß║┐ tr├íi"], ans:0},
  {q:"Trong c├íc quan hß╗ç dß║íng chuß║⌐n 2NF, kh├┤ng thß╗â ch├¿n th├¬m th├┤ng tin ......", opts:["Khi ch╞░a x├íc ─æß╗ïnh gi├í trß╗ï cß╗ºa c├íc thuß╗Öc t├¡nh kho├í","Khi gi├í trß╗ï cß╗ºa c├íc thuß╗Öc t├¡nh ch╞░a ─æ╞░ß╗úc x├íc ─æß╗ïnh","Khi gi├í trß╗ï cß╗ºa mß╗Öt thuß╗Öc t├¡nh ch╞░a ─æ╞░ß╗úc x├íc ─æß╗ïnh","Khi c├▓n dß╗ï th╞░ß╗¥ng th├┤ng tin"], ans:0},
  {q:"Trong c├íc quan hß╗ç dß║íng chuß║⌐n 2NF........", opts:["C├íc thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc kh├┤ng ─æß║ºy ─æß╗º v├áo kho├í","C├íc thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc v├áo kho├í","Cß║Ñm tß║Ñt cß║ú c├íc thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc v├áo tß║¡p con thß╗▒c sß╗▒ cß╗ºa kho├í","Kh├┤ng xuß║Ñt hiß╗çn c├íc phß╗Ñ thuß╗Öc bß║»c cß║ºu"], ans:2},
  {q:"Biß║┐n ─æß╗òi mß╗Öt quan hß╗ç ch╞░a chuß║⌐n ho├í vß╗ü nh├│m c├íc quan hß╗ç 3NF .........", opts:["Kh├┤ng tß╗òn thß║Ñt th├┤ng tin","Tß╗òn thß║Ñt th├┤ng tin","Bß║úo to├án phß╗Ñ thuß╗Öc","Bß║úo ─æß║úm t├¡nh ─æß╗Öc lß║¡p dß╗» liß╗çu"], ans:0},
  {q:"Tß╗½ mß╗Öt quan hß╗ç 1NF c├│ thß╗â chuyß╗ân ─æß╗òi vß╗ü nh├│m c├íc quan hß╗ç 3NF bß║▒ng c├ích.........", opts:["Loß║íi bß╗Å c├íc phß╗Ñ thuß╗Öc kh├┤ng ─æß║ºy ─æß╗º v├áo kho├í","Loß║íi bß╗Å c├íc phß╗Ñ thuß╗Öc kh├┤ng ─æß║ºy ─æß╗º v├áo kho├í v├á c├íc phß╗Ñ thuß╗Öc bß║»c cß║ºu","Loß║íi bß╗Å c├íc phß╗Ñ thuß╗Öc kh├┤ng ─æß║ºy ─æß╗º","Loß║íi bß╗Å c├íc phß╗Ñ thuß╗Öc ─æß║ºy ─æß╗º v├áo kho├í v├á c├íc phß╗Ñ thuß╗Öc bß║»c cß║ºu"], ans:1},
  {q:"Kß║┐t quß║ú cß╗ºa ph├⌐p chß╗ìn SELECT l├á mß╗Öt quan hß╗ç mß╗¢i, c├íc bß╗Ö.....", opts:["L├á mß╗Öt File dß╗» liß╗çu","L├á tß║¡p c├íc bß║ún ghi","Phß╗Ñ thuß╗Öc h├ám vß╗¢i c├íc thuß╗Öc t├¡nh","Thoß║ú m├ún mß╗Öt t├ón tß╗½ x├íc ─æß╗ïnh"], ans:3},
  {q:"To├ín hß║íng trong c├íc ph├⌐p ─æß║íi sß╗æ quan hß╗ç l├á c├íc ......", opts:["C├íc biß╗âu thß╗⌐c to├ín hß╗ìc","Quan hß╗ç hoß║╖c c├íc biß╗âu thß╗⌐c quan hß╗ç","Quan hß╗ç hß║▒ng hoß║╖c c├íc biß║┐n biß╗âu thß╗ï cho c├íc quan hß╗ç c├│ bß║¡c cß╗æ ─æß╗ïnh","C├íc biß║┐n biß╗âu thß╗ï cho c├íc quan hß╗ç c├│ bß║¡c cß╗æ ─æß╗ïnh"], ans:2},
  {q:"Hß╗úp c├íc quan hß╗ç khß║ú hß╗úp tr├¬n c├╣ng tß║¡p c├íc thuß╗Öc t├¡nh ╬⌐ l├á mß╗Öt quan hß╗ç tr├¬n ╬⌐, c├íc bß╗Ö l├á .................... bß╗Å ─æi c├íc bß╗Ö tr├╣ng nhau.", opts:["C├íc bß╗Ö cß╗ºa c├íc quan hß╗ç nguß╗ôn thoß║ú ─æiß╗üu kiß╗çn hß╗úp","C├íc bß╗Ö cß╗ºa c├íc quan hß╗ç nguß╗ôn","C├íc bß╗Ö cß╗ºa c├íc quan hß╗ç nguß╗ôn ─æ╞░ß╗úc t├ích kh├┤ng tß╗òn thß║Ñt th├┤ng tin","C├íc bß╗Ö c├│ mß║╖t trong c├íc quan hß╗ç nguß╗ôn"], ans:3},
  {q:"Giao cß╗ºa c├íc quan hß╗ç tr├¬n ╬⌐ c┼⌐ng l├á mß╗Öt quan hß╗ç tr├¬n ╬⌐, c├íc bß╗Ö cß╗ºa n├│ l├á c├íc bß╗Ö.......", opts:["C├│ mß║╖t trong c├íc quan hß╗ç nguß╗ôn","Cß╗ºa c├íc quan hß╗ç nguß╗ôn thoß║ú t├ón tß╗½ x├íc ─æß╗ïnh","Cß╗ºa c├íc quan hß╗ç nguß╗ôn","C├íc quan hß╗ç nguß╗ôn ─æ╞░ß╗úc t├ích kh├┤ng tß╗òn thß║Ñt th├┤ng tin"], ans:0},
  {q:"T├¡ch ─Éß╗ü c├íc c├íc quan hß╗ç l├á mß╗Öt quan hß╗ç, vß╗¢i tß║¡p c├íc thuß╗Öc t├¡nh l├á........, c├íc bß╗Ö bao gß╗ôm c├íc bß╗Ö quan hß╗ç nguß╗ôn nß╗æi tiß║┐p theo thß╗⌐ tß╗▒ ph├⌐p nh├ón.", opts:["Hß╗úp tß║¡p c├íc thuß╗Öc t├¡nh cß╗ºa c├íc quan hß╗ç nguß╗ôn","Thuß╗Öc t├¡nh c├│ mß║╖t trong quan hß╗ç ─æß║ºu ti├¬n ph├⌐p nh├ón","Giao tß║¡p c├íc thuß╗Öc t├¡nh cß╗ºa c├íc quan hß╗ç nguß╗ôn","Tß║¡p c├íc thuß╗Öc t├¡nh cß╗ºa c├íc quan hß╗ç t├ích"], ans:0},
  {q:"Ph├⌐p chiß║┐u quan hß╗ç, tß╗⌐c l├á tß╗½ quan hß╗ç nguß╗ôn .........", opts:["Bß╗Å ─æi mß╗Öt sß╗æ bß╗Ö thoß║ú m├ún biß╗âu thß╗⌐c logic","Bß╗Å ─æi mß╗Öt sß╗æ bß╗Ö thoß║ú m├ún biß╗âu thß╗⌐c logic","Bß╗Å ─æi mß╗Öt sß╗æ bß╗Ö","Bß╗Å ─æi mß╗Öt sß╗æ thuß╗Öc t├¡nh"], ans:3},
  {q:"Ng├┤n ngß╗» SQL c├│ thß╗â sß╗¡ dß╗Ñng theo c├íc ph╞░╞íng thß╗⌐c t╞░╞íng t├íc v├á........", opts:["Nh├║ng v├áo mß╗Öt ng├┤n ngß╗» chß╗º","Nh├║ng v├áo mß╗Öt c╞í sß╗ƒ dß╗» liß╗çu kh├íc","Nh├║ng v├áo hß╗ç ─æiß╗üu h├ánh","Nh├║ng v├áo mß╗Öt hß╗ç quß║ún trß╗ï c╞í sß╗ƒ dß╗» liß╗çu kh├íc"], ans:0},
  {q:"Thß╗▒c hiß╗çn ph├⌐p chß╗ìn tr├¬n quan hß╗ç sau mß╗çnh ─æß╗ü HAVING ........", opts:["Tr╞░ß╗¢c khi sau mß╗çnh ─æß╗ü GROUP BY thß╗▒c hiß╗çn gß╗Öp nh├│m","Nß║┐u GROUP BY ─æ├ú xuß║Ñt hiß╗çn","Theo c├íc y├¬u cß║ºu cß╗ºa mß╗çnh ─æß╗ü GROUP BY","Thoß║ú m├ún biß╗âu thß╗⌐c logic"], ans:1},
  {q:"Tr╞░ß╗¢c khi thß╗▒c hiß╗çn c├íc c├óu truy vß║Ñn, cß║ºn thiß║┐t phß║úi .........", opts:["Truy xuß║Ñt dß╗» liß╗çu tß║íi c├íc thiß║┐t bß╗ï ─æß║ºu cuß╗æi","Tß╗æi ╞░u ho├í c├óu hß╗Åi, bß║úo ─æß║úm t├¡nh ─æß╗Öc lß║¡p cß╗ºa dß╗» liß╗çu","Thß╗▒c hiß╗çn c├íc ph├⌐p chiß║┐u v├á chß╗ìn","Biß║┐n ─æß╗òi c├óu hß╗Åi d╞░ß╗¢i dß║íng biß╗âu thß╗⌐c quan hß╗ç"], ans:3},
  {q:"Biß║┐n ─æß╗òi mß╗Öt biß╗âu thß╗⌐c ─æß║íi sß╗æ quan hß╗ç vß╗ü mß╗Öt biß╗âu thß╗⌐c t╞░╞íng ─æ╞░╞íng, cho c├╣ng mß╗Öt kß║┐t quß║ú .......", opts:["Bß║úo to├án dß╗» liß╗çu","Bß║úo ─æß║úm ─æß╗Öc lß║¡p dß╗» liß╗çu","Kh├┤ng tß╗òn thß║Ñt th├┤ng tin","Vß╗¢i chi ph├¡ thß╗¥i gian thß╗▒c hiß╗çn v├á sß╗¡ dß╗Ñng bß╗Ö nhß╗¢ ├¡t h╞ín rß║Ñt nhiß╗üu"], ans:3},
  {q:"C├│ nhiß╗üu kß╗╣ thuß║¡t tß╗æi ╞░u ho├í c├íc c├óu hß╗Åi, trong ─æ├│ c├│ kß╗╣ thuß║¡t ph├ón r├ú c├óu hß╗Åi dß╗▒a tr├¬n..........", opts:["Suy dß║½n logic tß╗½ c├íc ti├¬n ─æß╗ü Armstrong","Ng├┤n ngß╗» cß╗ºa ─æß║íi sß╗æ quan hß╗ç","Biß╗âu thß╗⌐c ─æß║íi sß╗æ quan hß╗ç","Ng├┤n ngß╗» dß╗» liß╗çu"], ans:2},
  {q:"Biß║┐n ─æß╗òi mß╗Öt biß╗âu thß╗⌐c ─æß║íi sß╗æ quan hß╗ç vß╗ü mß╗Öt biß╗âu thß╗⌐c t╞░╞íng ─æ╞░╞íng vß╗¢i chi ph├¡ thß╗¥i gian thß╗▒c hiß╗çn v├á sß╗¡ dß╗Ñng bß╗Ö nhß╗¢......", opts:["Kh├┤ng phß╗Ñ thuß╗Öc c├íc ph├⌐p to├ín","Tß╗æi ╞░u","Phß╗Ñ thuß╗Öc v├á c├íc ph├⌐p to├ín thß╗▒c hiß╗çn","Hß║ín chß║┐"], ans:1},
  {q:"─É├ính gi├í tß╗æi ╞░u h├│a biß╗âu thß╗⌐c quan hß╗ç dß╗▒a v├áo c├óy kß║┐t nß╗æi tr├íi theo chiß╗üu s├óu, c├│.......", opts:["Chi ph├¡ thß╗¥i gian nhß╗Å","Chi ph├¡ t├¡nh theo chiß╗üu s├óu cß╗ºa c├óy","Chi ph├¡ bß╗Ö nhß╗¢ nhß╗Å","Chi ph├¡ bß║▒ng chi ph├¡ biß╗âu thß╗⌐c ban ─æß║ºu"], ans:0},
  {q:"Trong biß╗âu thß╗⌐c quan hß╗ç c├íc to├ín hß║íng l├á ......... (lß║ºn 2)", opts:["C├íc phß║ºn tß╗¡","C├íc phß╗Ñ thuß╗Öc h├ám","C├íc thuß╗Öc t├¡nh","C├íc quan hß╗ç trong mß╗Öt CSDL"], ans:3},
  {q:"Biß╗âu thß╗⌐c E1 t╞░╞íng ─æ╞░╞íng vß╗¢i E2, nß║┐u ch├║ng biß╗âu diß╗àn c├╣ng mß╗Öt ├ính xß║í, ngh─⌐a l├á .......... giß╗æng nhau trong biß╗âu thß╗⌐c, th├¼ kß║┐t quß║ú c┼⌐ng giß╗æng nhau.", opts:["C├íc quan hß╗ç","C├íc bß║ún ghi","C├íc thuß╗Öc t├¡nh","C├íc to├ín hß║íng"], ans:0},
  {q:"Hß╗ç quß║ún trß╗ï c╞í sß╗ƒ dß╗» liß╗çu DBMS kh├┤ng cho ph├⌐p ng╞░ß╗¥i sß╗¡ dß╗Ñng ........", opts:["Truy nhß║¡p t├¼m kiß║┐m hay truy vß║Ñn th├┤ng tin","Thß╗▒c hiß╗çn quyß╗ün truy nhß║¡p nß║┐u kh├┤ng ─æ╞░ß╗úc ph├⌐p cß╗ºa ng╞░ß╗¥i quß║ún trß╗ï CSDL","Thß╗▒c hiß╗çn quyß╗ün truy nhß║¡p CSDL","Vi phß║ím t├¡nh ─æß╗Öc lß║¡p v├á t├¡nh to├án vß║╣n dß╗» liß╗çu"], ans:1},
  {q:"H├¼nh thß╗⌐c th├┤ng dß╗Ñng nhß║Ñt ─æß╗â nhß║¡n biß║┐t ng╞░ß╗¥i sß╗¡ dß╗Ñng l├á mß║¡t khß║⌐u......", opts:["─Éß║úm bß║úo to├án vß║╣n dß╗» liß╗çu","V├á c├íc quy tß║»c bß║úo vß╗ç c╞í sß╗ƒ dß╗» liß╗çu","Chß╗ë c├│ hß╗ç thß╗æng v├á ng╞░ß╗¥i sß╗¡ dß╗Ñng biß║┐t","Mß╗¢i ─æ╞░ß╗úc ph├⌐p truy nhß║¡p CSDL"], ans:2},
  {q:"Mß╗Öt ng╞░ß╗¥i sß╗¡ dß╗Ñng ─æ╞░ß╗úc .......... v├á c├íc quyß╗ün n├áy c├│ thß╗â tham chiß║┐u ─æß║┐n quyß╗ün truy nhß║¡p cß╗ºa ng╞░ß╗¥i sß╗¡ dß╗Ñng kh├íc.", opts:["Cß║Ñp mß╗Öt v├ái quyß╗ün truy nhß║¡p c╞í sß╗ƒ dß╗» liß╗çu","Cß║Ñp quyß╗ün ─æß╗ìc v├á ghi dß╗» liß╗çu","Cß║Ñp quyß╗ün t├¼m kiß║┐m dß╗» liß╗çu","Cß║Ñp tß║Ñt cß║ú c├íc quyß╗ün truy nhß║¡p c╞í sß╗ƒ dß╗» liß╗çu"], ans:0},
  {q:"Cß║Ñp quyß╗ün READ ng╞░ß╗¥i sß╗¡ dß╗Ñng chß╗ë ─æ╞░ß╗úc quyß╗ün.......", opts:["Chß╗ë ─æ╞░ß╗úc ─æß╗ìc v├á ghi","Sß╗¡a ─æß╗òi, bß╗ò sung v├á cß║¡p nhß║¡t dß╗» liß╗çu","Sß╗¡ dß╗Ñng trong c├íc c├óu vß║Ñn tin v├á cß║¡p nhß║¡t, l╞░u trß╗» dß╗» liß╗çu","Vß║Ñn tin, kh├┤ng ─æ╞░ß╗úc ph├⌐p sß╗¡a ─æß╗òi, bß╗ò sung"], ans:3},
  {q:"'An to├án' dß╗» liß╗çu ngh─⌐a l├á c╞í sß╗ƒ dß╗» liß╗çu cß║ºn phß║úi ......", opts:["Bß║úo ─æß║úm t├¡nh ─æß╗Öc lß║¡p dß╗» liß╗çu","Bß║úo vß╗ç, bß║úo ─æß║úm sß╗▒ to├án vß║╣n dß╗» liß╗çu","Bß║úo to├án dß╗» liß╗çu khi thao t├íc tr├¬n n├│","Bß║úo vß╗ç chß╗æng truy nhß║¡p tr├íi ph├⌐p"], ans:3},
  {q:"To├án vß║╣n dß╗» liß╗çu ngh─⌐a l├á ......", opts:["Dß╗» liß╗çu trong CSDL lu├┤n lu├┤n ch├¡nh x├íc tß║íi mß╗ìi thß╗¥i ─æiß╗âm","C├│ thß╗â thß╗▒c hiß╗çn c├íc chiß║┐n l╞░ß╗úc truy nhß║¡p dß╗» liß╗çu","Bß║úo ─æß║úm t├¡nh ─æß╗Öc lß║¡p dß╗» liß╗çu tß║íi mß╗ìi thß╗¥i ─æiß╗âm","C├│ thß╗â t├¼m kiß║┐m tß║íi mß╗ìi thß╗¥i ─æiß╗âm"], ans:0},
  {q:"M├┤ h├¼nh kiß║┐n tr├║c CSDL c├│ 3 mß╗⌐c, thß╗â hiß╗çn ............ (lß║ºn 2)", opts:["T├¡nh nhß║Ñt qu├ín dß╗» liß╗çu","T├¡nh ─æ╞ín giß║ún thao t├íc dß╗» liß╗çu","T├¡nh to├án vß║╣n dß╗» liß╗çu","T├¡nh ─æß╗Öc lß║¡p dß╗» liß╗çu"], ans:3},
  {q:"Ng╞░ß╗¥i sß╗¡ dß╗Ñng ─æ╞░ß╗úc quyß╗ün ghi v├á ─æß╗ìc bao gß╗ôm c├íc quyß╗ün nh╞░ ch├¿n, x├│a v├á sß╗¡a ─æß╗òi.......", opts:["GRANT READ ON R TO GROUP/WORLD","GRANT ALL ON R TO GROUP/WORLD","GRANT SELECT ON R TO GROUP/WORLD","GRANT READ/WRITE ON R TO GROUP/WORLD"], ans:1},
  {q:"C├íc quyß╗ün tham chiß║┐u REFERENCE ─æ╞░ß╗úc cß║Ñp cho ng╞░ß╗¥i sß╗¡ dß╗Ñng U1 tr├¬n thuß╗Öc t├¡nh branch-name ─æß║┐n quan hß╗ç BRANCH............", opts:["GRANT REFERENCE (branch-name) TO U","GRANT REFERENCE ON BRANCH TO U","GRANT REFERENCE (branch-name) ON BRANCH TO U","GRANT REFERENCE (branch-name) ON BRANCH"], ans:2},
  {q:"Thu hß╗ôi ─æß║╖c quyß╗ün ─æ├ú cß║Ñp cho U1, U2 v├á U3......", opts:["REVOKE SELECT ON BRANCH FROM U1, U2, U3","GRANT ALL ON ACCOUNT TO U1, U2, U3","REVOKE REFERENCES (branch-name) ON BRANCH FROM U1","GRANT SELECT ON ACCOUNT TO U1, U2, U3"], ans:0},
  {q:"Cho ╬⌐ = {A, B, C} v├á F = {A -> C, A -> B} (lß║ºn 2):", opts:["Kh├┤ng tß╗ôn tß║íi c├íc thuß╗Öc t├¡nh kh├┤ng kho├í","'{A, C}, {B, E}' l├á kho├í cß╗ºa quan hß╗ç tr├¬n","Quan hß╗ç tr├¬n c├│ dß║íng chuß║⌐n kh├┤ng 2NF","Tß╗ôn tß║íi c├íc thuß╗Öc t├¡nh kh├┤ng kho├í"], ans:3},
  {q:"Trong quan hß╗ç 2NF, cß║Ñm tß║Ñt cß║ú c├íc phß╗Ñ thuß╗Öc kh├┤ng ─æß║ºy ─æß╗º (lß║ºn 2):", opts:["Trong quan hß╗ç 2NF, cß║Ñm tß║Ñt cß║ú c├íc phß╗Ñ thuß╗Öc kh├┤ng ─æß║ºy ─æß╗º v├áo kho├í","Trong quan hß╗ç 2NF, cß║Ñm tß║Ñt cß║ú c├íc phß╗Ñ thuß╗Öc ─æß║ºy ─æß╗º v├áo kho├í","Trong quan hß╗ç 2NF, c├íc thuß╗Öc t├¡nh kho├í phß╗Ñ thuß╗Öc v├áo c├íc tß║¡p con cß╗ºa kho├í","Trong quan hß╗ç 2NF, c├íc thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc v├áo kho├í"], ans:0},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt (quan hß╗ç 3NF lß║ºn 2):", opts:["Trong quan hß╗ç 3NF, c├íc thuß╗Öc t├¡nh kh├┤ng kho├í bß║▒ng rß╗ùng","Trong quan hß╗ç 3NF, cß║Ñm c├íc thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc v├áo thuß╗Öc t├¡nh c├│ bao ─æ├│ng kh├íc ╬⌐","Trong quan hß╗ç 3NF, cß║Ñm thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc v├áo c├íc thuß╗Öc t├¡nh c├│ bao ─æ├│ng bß║▒ng ╬⌐","Trong quan hß╗ç 3NF, c├íc thuß╗Öc t├¡nh kh├┤ng kho├í phß╗Ñ thuß╗Öc h├ám v├áo thuß╗Öc t├¡nh c├│ bao ─æ├│ng kh├íc ╬⌐"], ans:2},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt khi khß║úo s├ít quan hß╗ç gß╗ôm c├íc thuß╗Öc t├¡nh: M├ú c├íp, t├¬n c├íp, gi├í, m├ú n╞░ß╗¢c sß║ún xuß║Ñt, n╞░ß╗¢c sß║ún xuß║Ñt (lß║ºn 3):", opts:["L├á quan hß╗ç 2NF v├á kh├┤ng chß╗⌐a c├íc phß╗Ñ thuß╗Öc bß║»c cß║ºu","L├á quan hß╗ç 3NF, kh├┤ng phß║úi l├á quan hß╗ç 2NF","L├á quan hß╗ç 3NF","Tß╗ôn tß║íi phß╗Ñ thuß╗Öc m├á vß║┐ phß║úi v├á tr├íi kh├┤ng phß║úi l├á thuß╗Öc t├¡nh kho├í"], ans:3},
  {q:"Chß╗ìn mß╗Öt khß║│ng ─æß╗ïnh n├áo sau ─æ├óy l├á ─æ├║ng nhß║Ñt (t├ích 3NF lß║ºn 2):", opts:["T├ích mß╗Öt quan hß╗ç kh├┤ng 3NF th├ánh nhiß╗üu quan hß╗ç 3NF, tß╗òn thß║Ñt th├┤ng tin","Tß╗½ mß╗Öt quan hß╗ç 2NF t├ích th├ánh nhiß╗üu quan hß╗ç 3NF","T├ích mß╗Öt quan hß╗ç th├ánh nhiß╗üu quan hß╗ç 3NF, kh├┤ng mß║Ñt th├┤ng tin","Tß╗½ mß╗Öt quan hß╗ç 2NF t├ích th├ánh nhiß╗üu quan hß╗ç 3NF, kh├┤ng l├ám mß║Ñt th├┤ng tin"], ans:3},
  {q:"X├⌐t quan hß╗ç ╬⌐ = {A, B, C, D, E, G, H} v├á F = {C -> AB, D -> E, B -> G} (lß║ºn 2):", opts:["Kho├í quan hß╗ç l├á {B, C, A}","Quan hß╗ç c├│ dß║íng chuß║⌐n 3NF","Kho├í quan hß╗ç l├á {H, C, D}","Tß║Ñt cß║ú ─æß╗üu sai"], ans:2}
];

// ===========================
// STATE
// ===========================
let questions = [];
let currentIdx = 0;
let answers = {};   // idx -> chosen opt index
let results = {};   // idx -> 'correct'|'wrong'
let mode = 'practice';
let startTime, elapsedTime=0;
let timerInterval, questionTimer;
let retryData = null;
let panelOpen = false;

// ===========================
// HOME
// ===========================
function selectMode(el){
  document.querySelectorAll('.mode-card').forEach(c=>c.classList.remove('selected'));
  el.classList.add('selected');
  mode = el.dataset.mode;
  const timerBadge = document.getElementById('timer-badge');
  if(mode==='review') {
    document.getElementById('num-questions').disabled=true;
    document.getElementById('start-from').disabled=true;
  } else {
    document.getElementById('num-questions').disabled=false;
    document.getElementById('start-from').disabled=false;
  }
}

function startQuiz(){
  const numQ = parseInt(document.getElementById('num-questions').value)||30;
  const startFrom = parseInt(document.getElementById('start-from').value)||1;
  
  if(mode==='review'){
    questions = RAW_QUESTIONS.map((q,i)=>({...q,origIdx:i}));
  } else {
    let pool = RAW_QUESTIONS.slice(startFrom-1);
    // shuffle
    pool = pool.map((q,i)=>({...q,origIdx:startFrom-1+i})).sort(()=>Math.random()-0.5);
    questions = pool.slice(0, Math.min(numQ, pool.length));
  }
  
  answers = {}; results = {}; currentIdx = 0;
  startTime = Date.now();
  
  showScreen('quiz-screen');
  buildNavGrid();
  renderQuestion();
  
  if(mode==='timed') startTimerBadge();
  if(mode==='review') enterReviewMode();
}

function enterReviewMode(){
  // Show all answers immediately
  questions.forEach((_,i)=>{ answers[i]=questions[i].ans; results[i]='correct'; });
  document.getElementById('btn-submit').style.display='none';
  document.getElementById('btn-end-quiz').textContent='Xong Γ£ô';
}

// ===========================
// NAVIGATION PANEL
// ===========================
function buildNavGrid(){
  const grid = document.getElementById('nav-grid');
  grid.innerHTML='';
  questions.forEach((_,i)=>{
    const b=document.createElement('button');
    b.className='nav-btn'; b.textContent=i+1;
    b.onclick=()=>jumpTo(i);
    b.id=`nav-${i}`;
    grid.appendChild(b);
  });
}

function updateNavBtn(i){
  const b=document.getElementById(`nav-${i}`);
  if(!b) return;
  b.className='nav-btn';
  if(i===currentIdx) b.classList.add('current');
  else if(results[i]==='correct') b.classList.add('correct');
  else if(results[i]==='wrong') b.classList.add('wrong');
  else if(answers[i]!==undefined) b.classList.add('answered');
}

function togglePanel(){
  panelOpen=!panelOpen;
  const p=document.getElementById('nav-panel');
  if(panelOpen) p.classList.add('show'); else p.classList.remove('show');
}

// ===========================
// TIMER
// ===========================
function startTimerBadge(){
  const badge=document.getElementById('timer-badge');
  badge.style.display='block';
  let sec=60;
  badge.textContent='1:00';
  badge.classList.remove('danger');
  clearInterval(questionTimer);
  questionTimer=setInterval(()=>{
    sec--;
    const m=Math.floor(sec/60), s=sec%60;
    badge.textContent=`${m}:${s<10?'0':''}${s}`;
    if(sec<=10) badge.classList.add('danger');
    if(sec<=0){
      clearInterval(questionTimer);
      // auto next
      if(answers[currentIdx]===undefined) answers[currentIdx]=-1;
      if(currentIdx<questions.length-1) nextQ();
      else endQuiz();
    }
  },1000);
}

// ===========================
// RENDER QUESTION
// ===========================
function renderQuestion(){
  const q=questions[currentIdx];
  const total=questions.length;
  
  // Header
  document.getElementById('q-counter').textContent=`C├óu ${currentIdx+1}/${total}`;
  const correct=Object.values(results).filter(r=>r==='correct').length;
  const wrong=Object.values(results).filter(r=>r==='wrong').length;
  document.getElementById('q-score-live').innerHTML=`Γ£ô ${correct} &nbsp;Γ£ù ${wrong}`;
  document.getElementById('progress-fill').style.width=`${((currentIdx+1)/total)*100}%`;
  
  // Question tag
  document.getElementById('q-tag').textContent=`≡ƒôî C├óu ${currentIdx+1} (Gß╗æc: #${q.origIdx+1})`;
  document.getElementById('question-text').textContent=q.q;
  
  // Options
  const ol=document.getElementById('options-list');
  ol.innerHTML='';
  const letters=['A','B','C','D'];
  q.opts.forEach((opt,i)=>{
    const btn=document.createElement('button');
    btn.className='option-btn';
    btn.id=`opt-${i}`;
    btn.innerHTML=`<span class="option-letter">${letters[i]}</span><span class="option-text">${opt}</span>`;
    btn.onclick=()=>selectOption(i);
    ol.appendChild(btn);
  });
  
  // Explanation
  document.getElementById('explanation-box').classList.remove('show');
  document.getElementById('explanation-box').textContent='';
  
  // Restore state if already answered
  if(answers[currentIdx]!==undefined){
    restoreAnswerState();
  }
  
  // Buttons
  const submitted=results[currentIdx]!==undefined;
  const btnSubmit=document.getElementById('btn-submit');
  if(mode==='review'){
    btnSubmit.style.display='none';
  } else if(mode==='exam'){
    btnSubmit.style.display='none';
  } else {
    btnSubmit.style.display='inline-block';
    btnSubmit.disabled=answers[currentIdx]===undefined;
    if(submitted) { btnSubmit.disabled=true; btnSubmit.textContent='─É├ú kiß╗âm tra Γ£ô'; }
    else btnSubmit.textContent='Kiß╗âm tra';
  }
  
  document.getElementById('btn-prev').disabled=currentIdx===0;
  document.getElementById('btn-next').disabled=currentIdx===total-1;
  
  // Nav
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('current'));
  updateNavBtn(currentIdx);
  
  // Timer
  if(mode==='timed' && results[currentIdx]===undefined) startTimerBadge();
  
  // Scroll to top of main
  document.querySelector('.quiz-main').scrollTo(0,0);
}

function restoreAnswerState(){
  const q=questions[currentIdx];
  const chosen=answers[currentIdx];
  const submitted=results[currentIdx]!==undefined;
  const letters=['A','B','C','D'];
  
  q.opts.forEach((_,i)=>{
    const btn=document.getElementById(`opt-${i}`);
    if(!btn) return;
    if(i===chosen) btn.classList.add('selected');
    if(submitted || mode==='review'){
      btn.disabled=true;
      if(i===q.ans) btn.classList.add('correct-ans');
      else if(i===chosen && i!==q.ans) btn.classList.add('wrong-ans');
    }
  });
  
  if(submitted && mode==='practice'){
    const expBox=document.getElementById('explanation-box');
    expBox.textContent=`Γ£ô ─É├íp ├ín ─æ├║ng: ${letters[q.ans]}. ${q.opts[q.ans]}`;
    expBox.classList.add('show');
  }
}

function selectOption(idx){
  if(results[currentIdx]!==undefined) return; // already submitted
  if(mode==='review') return;
  
  answers[currentIdx]=idx;
  document.querySelectorAll('.option-btn').forEach(b=>b.classList.remove('selected'));
  document.getElementById(`opt-${idx}`).classList.add('selected');
  
  if(mode==='practice'){
    document.getElementById('btn-submit').disabled=false;
  } else if(mode==='exam' || mode==='timed'){
    // no instant check
  }
  
  updateNavBtn(currentIdx);
}

function submitAnswer(){
  if(answers[currentIdx]===undefined) return;
  const q=questions[currentIdx];
  const chosen=answers[currentIdx];
  const isCorrect=chosen===q.ans;
  results[currentIdx]=isCorrect?'correct':'wrong';
  
  // Update options UI
  q.opts.forEach((_,i)=>{
    const btn=document.getElementById(`opt-${i}`);
    if(!btn) return;
    btn.disabled=true;
    if(i===q.ans) btn.classList.add('correct-ans');
    else if(i===chosen && !isCorrect) btn.classList.add('wrong-ans');
  });
  
  // Explanation
  const letters=['A','B','C','D'];
  const expBox=document.getElementById('explanation-box');
  expBox.textContent=isCorrect
    ? `Γ£à ─É├║ng! ─É├íp ├ín: ${letters[q.ans]}. ${q.opts[q.ans]}`
    : `Γ¥î Sai! ─É├íp ├ín ─æ├║ng: ${letters[q.ans]}. ${q.opts[q.ans]}`;
  expBox.classList.add('show');
  
  document.getElementById('btn-submit').disabled=true;
  document.getElementById('btn-submit').textContent='─É├ú kiß╗âm tra Γ£ô';
  updateNavBtn(currentIdx);
  
  clearInterval(questionTimer);
  
  // Auto advance in timed/practice mode after 1.5s
  if(mode==='timed'){
    setTimeout(()=>{ if(currentIdx<questions.length-1) nextQ(); },1500);
  }
}

function jumpTo(i){
  currentIdx=i;
  renderQuestion();
}

function prevQ(){
  if(currentIdx>0){ currentIdx--; renderQuestion(); }
}

function nextQ(){
  if(currentIdx<questions.length-1){ currentIdx++; renderQuestion(); }
}

function endQuiz(){
  clearInterval(timerInterval);
  clearInterval(questionTimer);
  elapsedTime=Math.floor((Date.now()-startTime)/1000);
  
  // Compute results for exam mode
  if(mode==='exam' || mode==='timed'){
    questions.forEach((_,i)=>{
      if(answers[i]!==undefined && results[i]===undefined){
        results[i]=answers[i]===questions[i].ans?'correct':'wrong';
      }
    });
  }
  
  showResults();
}

// ===========================
// RESULTS
// ===========================
function showResults(){
  const total=questions.length;
  const correct=Object.values(results).filter(r=>r==='correct').length;
  const wrong=Object.values(results).filter(r=>r==='wrong').length;
  const skip=total-Object.keys(results).length;
  const pct=Math.round((correct/total)*100);
  
  document.getElementById('score-pct').textContent=pct+'%';
  document.getElementById('score-circle').style.setProperty('--pct', `${pct*3.6}deg`);
  document.getElementById('rs-correct').textContent=correct;
  document.getElementById('rs-wrong').textContent=wrong;
  document.getElementById('rs-skip').textContent=skip;
  
  const m=Math.floor(elapsedTime/60), s=elapsedTime%60;
  document.getElementById('rs-time').textContent=`${m}:${s<10?'0':''}${s}`;
  
  let emoji='≡ƒÄë', title='Ho├án th├ánh!', sub='';
  if(pct>=90){ emoji='≡ƒÅå'; title='Xuß║Ñt sß║»c!'; sub='Tuyß╗çt vß╗¥i, bß║ín nß║»m vß╗»ng kiß║┐n thß╗⌐c!'; }
  else if(pct>=70){ emoji='≡ƒÿè'; title='Tß╗æt lß║»m!'; sub='Kß║┐t quß║ú khß║ú quan, tiß║┐p tß╗Ñc cß╗æ gß║»ng!'; }
  else if(pct>=50){ emoji='≡ƒÿÉ'; title='Cß║ºn ├┤n th├¬m!'; sub='H├úy xem lß║íi phß║ºn ch╞░a nß║»m vß╗»ng.'; }
  else { emoji='≡ƒÿà'; title='Cß║ºn cß╗æ gß║»ng h╞ín!'; sub='─Éß╗½ng nß║ún l├▓ng, ├┤n tß║¡p th├¬m nh├⌐!'; }
  
  document.getElementById('result-emoji').textContent=emoji;
  document.getElementById('result-title').textContent=title;
  document.getElementById('result-sub').textContent=sub || `─É├║ng ${correct}/${total} c├óu ΓÇô ${pct}%`;
  
  retryData = { mode, numQ:questions.length };
  renderReview('all');
  showScreen('result-screen');
}

function renderReview(filter){
  const list=document.getElementById('review-list');
  list.innerHTML='';
  const letters=['A','B','C','D'];
  
  questions.forEach((q,i)=>{
    const res=results[i];
    const userAns=answers[i];
    if(filter==='wrong' && res!=='wrong') return;
    if(filter==='correct' && res!=='correct') return;
    if(filter==='skip' && res!==undefined) return;
    
    const div=document.createElement('div');
    div.className=`review-item ${res==='correct'?'correct-r':res==='wrong'?'wrong-r':'skip-r'}`;
    
    let ansHtml='';
    if(res===undefined){
      ansHtml=`<div class="review-skip">Ch╞░a trß║ú lß╗¥i</div>`;
    } else {
      const userCls=res==='correct'?'review-user ok':'review-user';
      const icon=res==='correct'?'Γ£ô':'Γ£ù';
      ansHtml=`<div class="${userCls}">${icon} Bß║ín chß╗ìn: ${letters[userAns]}. ${q.opts[userAns]}</div>`;
      if(res==='wrong') ansHtml+=`<div class="review-correct">Γ£ô ─É├íp ├ín ─æ├║ng: ${letters[q.ans]}. ${q.opts[q.ans]}</div>`;
    }
    
    div.innerHTML=`
      <div class="review-q"><span class="review-q-num">${i+1}.</span>${q.q}</div>
      <div class="review-ans">${ansHtml}</div>
    `;
    list.appendChild(div);
  });
  
  if(list.children.length===0){
    list.innerHTML='<div style="color:var(--text-muted);text-align:center;padding:2rem">Kh├┤ng c├│ c├óu n├áo</div>';
  }
}

function filterReview(type, btn){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderReview(type);
}

function retryQuiz(){
  // redo same questions
  answers={}; results={}; currentIdx=0;
  startTime=Date.now();
  questions=questions.sort(()=>Math.random()-0.5);
  showScreen('quiz-screen');
  buildNavGrid();
  renderQuestion();
  if(mode==='timed') startTimerBadge();
}

// ===========================
// SCREEN MANAGER
// ===========================
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goHome(){
  clearInterval(timerInterval); clearInterval(questionTimer);
  showScreen('home-screen');
}