exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES DONT SPAM*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 BELUM DAFTAR 」*\n\nAnda belum terdaftar di database*\n*silahkan daftra terlebih dahulu*\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar affis|17*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`\`\`\`Pendaftaran Berhasil dengan kode SN :${serialUser}\`\`\`\n\`\`\`Pada : ${time}\`\`\`\n\n\`\`\`Nama : ${namaUser}\`\`\`\n\`\`\`Nomer : wa.me/${sender.split("@")[0]}\`\`\`\n\`\`\`Umur : ${umurUser}\`\`\`\n\n\`\`\`NOTE : Anda sudah terdaftar di YXU BOT\`\`\`\n\`\`\`Jika BOT tidak merespon tolong jangan di spam\`\`\``
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi) => { 
	return `
*Follow my instagram : *
_https://instagram.com/yuu_fck18_


◩ *Name* : _${pushname}_
◩ *Premium* : ${premi}
◩ *Nomer* : _wa.me/${sender.split("@")[0]}_
◩ *Uang mu* : _Rp${uangku}_
◩ *XP* : _${getLevelingXp(sender)}/${reqXp}_
◩ *Level* : _${getLevelingLevel(sender)}_
◩ *Role* : _${role}_
◩ *User register* : _${_registered.length}_

  ◩ *MAKER MENU* 
❏ *${prefix}sticker* 
❏ *${prefix}quotemaker* <text|author>
❏ *${prefix}qrcode* <text>
❏ *${prefix}ttp*
❏ *${prefix}stickerhide* <text>
❏ *${prefix}emoji*

  ◩ *FUN MENU*  
❏ *${prefix}lirik* <text>
❏ *${prefix}artinama*
❏ *${prefix}chord* <text>
❏ *${prefix}bisakah* <teks>
❏ *${prefix}kapankah* <teks>
❏ *${prefix}apakah* <teks>
❏ *${prefix}rate* <teks>
❏ *${prefix}slap*
❏ *${prefix}tampar*
❏ *${prefix}moddroid* <teks> *[VIP]*
❏ *${prefix}happymod* <teks> *[VIP]*

  ◩ *MUTUAL* 
❏ *${prefix}mutual*
❏ *${prefix}next*

  ◩ *MEDIA MENU* 
❏ *${prefix}brainly* *[VIP]*
❏ *${prefix}pinterest*
❏ *${prefix}resepmasakan* <teks>
❏ *${prefix}igstalk* <username>
❏ *${prefix}bitly* <link>
❏ *${prefix}tiktok* <username> *[VIP]*
❏ *${prefix}tiktokstalk* <username> *[VIP]*
❏ *${prefix}ssweb* <link>
❏ *${prefix}kbbi* <text>

  ◩ *YT & SONG* 
❏ *${prefix}ytmp3* <link> *[VIP]*
❏ *${prefix}ytmp4* <link> *[VIP]*
❏ *${prefix}joox* <judul> *[VIP]*

  ◩ *NSFW MENU* 
❏ *${prefix}anjing*
❏ *${prefix}blowjob*
❏ *${prefix}nekonime*
❏ *${prefix}pokemon*
❏ *${prefix}husbu*
❏ *${prefix}nangis*
❏ *${prefix}cium*
❏ *${prefix}peluk*
❏ *${prefix}ranime*

  ◩ *LIMIT & UANG*
❏ *${prefix}limit* 
❏ *${prefix}buylimit* <jumblah>
❏ *${prefix}transfer* <tag |jumblah>
❏ *${prefix}dompet*
❏ *${prefix}giftlimit* <tag jumblah>
❏ *${prefix}leaderboard* <jumblah>

  ◩ *GROUP MENU*
❏ *${prefix}delete* <tag message>
❏ *${prefix}hidetag*
❏ *${prefix}blocklist*
❏ *${prefix}grouplist*
❏ *${prefix}level*
❏ *${prefix}linkgc*
❏ *${prefix}tagall*
❏ *${prefix}setpp*
❏ *${prefix}add* <tag>
❏ *${prefix}kick* <tag>
❏ *${prefix}setname* <teks>
❏ *${prefix}setdesc* <teks>
❏ *${prefix}demote* <tag>
❏ *${prefix}promote* <tag>
❏ *${prefix}listadmin*
❏ *${prefix}group* [buka/tutup]
❏ *${prefix}leveling* [enable/disable]
❏ *${prefix}nsfw* [1/0]
❏ *${prefix}simih* [1/0]
❏ *${prefix}welcome* [1/0]
❏ *${prefix}antilink* [1/0]
❏ *${prefix}nobadword* [enable/disable]

  ◩ *OWNER MENU*
❏ *${prefix}bc* <teks>
❏ *${prefix}addbadword* <text>
❏ *${prefix}delbadword* <text>
❏ *${prefix}bcgc* <teks>
❏ *${prefix}kickall* <rawan ban>
❏ *${prefix}setreply* <teks>
❏ *${prefix}setprefix* <symbol>
❏ *${prefix}clearall*
❏ *${prefix}block* <tag>
❏ *${prefix}unblock* <tag>
❏ *${prefix}leave*
❏ *${prefix}event* [1/0]
❏ *${prefix}clone* <tag>
❏ *${prefix}setppbot*
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
╭──── *[ SELAMAT ]* ────
├ *Nama* : ${pushname}
├ *Nomer* : wa.me/${sender.split("@")[0]}
├ *Xp* : ${getLevelingXp(sender)}
├ *Limit* = +3
├ *Role* :  ${role}
├ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
├ *Congrats*🎉
╰──── *[ SELAMAT ]* ────   
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*beli limit untuk mendapatkan limit/ naik level*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`╭────[ *ATM* ]────\n├ ◩ *Nama* : ${pushname}\n├ ◩ *Nomer* : ${sender.split("@")[0]}\n├ ◩ *Uang* : ${uangkau}\n╰────[ *ATM* ]────`
}

exports.premadd = (pnom) => {
	return`*「 PREMIUM ADD 」*

*Name* : ${pnom}
*Expired* : 30 DAY\n*thank for order premium*`
}

exports.dellprem = (hnom) => {
	return`*「 PREMIUM DELETE 」*

*Name* : ${hnom}
*Expired* : NOW:v\n*thank for order premium back soon for buying again:D*`
}

exports.premon = (pushname) => {
	return`MAAF *${pushname}* ANDA BUKAN USER PREMIUM`
}

