import moment from 'moment-timezone';

let handler = async (m, { conn, args }) => {
    let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
    let user = global.db.data.users[userId];
    let name = conn.getName(userId);
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let totalreg = Object.keys(global.db.data.users).length;
    let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
    
    let txt = `
✨ ¡Hola! Soy *${botname}* Tu Asistente Bot 🤖 ¡Prepárate para la magia! ✨

╭┈ ↷
│🔮 Cliente » @${userId.split('@')[0]} ¡Un gusto conocerte!
│🌟 Modo » Público ¡Para todos!
│🚀 Bot » ${(conn.user.jid == global.conn.user.jid ? 'Principal 🅥 ¡El mero mero!' : 'Prem Bot 🅑 ¡Con esteroides!')}
│⏰ Activada » ${uptime} ¡Siempre al pie del cañón!
│👥 Usuarios » ${totalreg} ¡Cada vez somos más!
│✨ Comandos » ${totalCommands} ¡Un arsenal a tu disposición!
│📡 Baileys » Multi Device ¡Conectado a todo!
╰─────────────────
💰 ¡Crea tu propio *Sub-Bot* con tu número usando *#qr* o *#code* y domina el mundo! 😈😈

╔═════════════════════════════╗
║ ℹ️ **INFO-BOT: ¡Todo sobre mí!** ℹ️ ║
╚═════════════════════════════╝
*   `#help` ➡️ `#menu`: ¡Despliega la lista de comandos como un mago! 🎩
*   `#uptime` ➡️ `#runtime`: ¡Mira cuánto tiempo llevo encendido, como un campeón! 🏆
*   `#sc` ➡️ `#script`: ¡Enlace al código fuente! 📜 ¡Para los más curiosos!
*   `#staff` ➡️ `#colaboradores`: ¡El equipo detrás de la magia! ✨ ¡Conócelos!
*   `#serbot` ➡️ `#serbot code`: ¡Crea tu propio mini-bot! 🤖 ¡Domina el universo!
*   `#bots` ➡️ `#sockets`: ¡Lista de mis clones activos! 👯 ¡Somos legión!
*   `#creador`: ¡Contacta al genio que me dio vida! 🧠 ¡Ríndele pleitesía!
*   `#status` ➡️ `#estado`: ¡Mi estado actual! 💚 ¡Todo en orden!
*   `#links` ➡️ `#grupos`: ¡Únete a la fiesta! 🎉 ¡Enlaces oficiales!
*   `#infobot` ➡️ `#infobot`: ¡Toda mi info jugosa! ℹ️ ¡Sácale el jugo!
*   `#sug` ➡️ `#newcommand`: ¡Dime qué comando te gustaría! 💡 ¡Tu opinión importa!
*   `#p` ➡️ `#ping`: ¡Comprueba mi velocidad! 🚀 ¡Soy más rápido que la luz!
*   `#reporte` ➡️ `#reportar`: ¡Ayúdame a mejorar! 🐛 ¡Reporta cualquier fallo!
*   `#sistema` ➡️ `#system`: ¡Estado de mi guarida! 🏠 ¡Todo bajo control!
*   `#speed` ➡️ `#speedtest`: ¡Mis estadísticas de velocidad! 💨 ¡Acelerando a fondo!
*   `#views` ➡️ `#usuarios`: ¡Cuántos me están usando! 🤩 ¡Somos una multitud!
*   `#funciones` ➡️ `#totalfunciones`: ¡Todas mis habilidades! 💪 ¡Un repertorio completo!
*   `#ds` ➡️ `#fixmsgespera`: ¡Limpia el desorden! 🧹 ¡Adiós archivos basura!
*   `#editautoresponder`: ¡Personaliza mis respuestas! 💬 ¡Hazme a tu medida!

╔═════════════════════════════╗
║ 🔎 **BUSCADOR SUPREMO: ¡Encuentra lo que quieras!** 🔎 ║
╚═════════════════════════════╝
*   `#tiktoksearch` ➡️ `#tiktoks`: ¡Encuentra los TikToks más virales! 🎶
*   `#tweetposts`: ¡Cazador de tweets! 🐦 ¡Encuentra los posts más jugosos de Twitter/X!
*   `#ytsearch` ➡️ `#yts`: ¡El oráculo de YouTube! 🔮 ¡Busca videos al instante!
*   `#githubsearch`: ¡Espía de GitHub! 🕵️ ¡Encuentra usuarios y sus repositorios!
*   `#cuevana` ➡️ `#cuevanasearch`: ¡Noches de cine aseguradas! 🎬 ¡Películas y series al toque!
*   `#google`: ¡El todopoderoso Google a tu servicio! 🌐 ¡Pregúntale lo que quieras!
*   `#pin` ➡️ `#pinterest`: ¡Imágenes que inspiran! 🖼️ ¡Encuentra la foto perfecta!
*   `#imagen` ➡️ `#image`: ¡Otro buscador de imágenes! 📸 ¡Para todos los gustos!
*   `#animesearch` ➡️ `#animess`: ¡Tu dosis de anime! 🌸 ¡Encuentra tus series favoritas!
*   `#animei` ➡️ `#animeinfo`: ¡Info detallada de cada episodio! ℹ️ ¡No te pierdas nada!
*   `#infoanime`: ¡Todo sobre ese anime que te encanta! 🤓 ¡Conviértete en un experto!
*   `#hentaisearch` ➡️ `#searchhentai`: ¡Para los más traviesos! 😈 ¡Encuentra ese... anime especial!
*   `#xnxxsearch` ➡️ `#xnxxs`: ¡Buscador de placer! 🔞 ¡Vídeos para adultos!
*   `#xvsearch` ➡️ `#xvideossearch`: ¡Más opciones para tu búsqueda! 🔥 ¡Encuentra lo que te enciende!
*   `#pornhubsearch` ➡️ `#phsearch`: ¡El rey del contenido adulto! 👑 ¡Atrévete a buscar!
*   `#npmjs`: ¡El buscador de los desarrolladores! 💻 ¡Encuentra paquetes para tus proyectos!

╔═════════════════════════════╗
║ ⬇️ **DESCARGAS EXPRESS: ¡Todo a tu alcance!** ⬇️ ║
╚═════════════════════════════╝
*   `#tiktok` ➡️ `#tt`: ¡Descarga los TikToks más adictivos! 📱
*   `#mediafire` ➡️ `#mf`: ¡Archivos de MediaFire al instante! 💾
*   `#pinvid` ➡️ `#pinvideo`: ¡Vídeos de Pinterest en tu bolsillo! 📌
*   `#mega` ➡️ `#mg`: ¡Descargas de MEGA sin complicaciones! 🚀
*   `#play` ➡️ `#play2`: ¡Música y vídeos de YouTube en un clic! 🎵
*   `#ytmp3` ➡️ `#ytmp4`: ¡Elige el formato y descarga! 🎧
*   `#fb` ➡️ `#facebook`: ¡Vídeos de Facebook para guardar! 💙
*   `#twitter` ➡️ `#x`: ¡Descarga los tuits más épicos! 🐦
*   `#ig` ➡️ `#instagram`: ¡Guarda tus fotos y vídeos favoritos de Instagram! 📸
*   `#tts` ➡️ `#tiktoks`: ¡Busca y descarga vídeos de TikTok! 🔎
*   `#terabox` ➡️ `#tb`: ¡Descargas de Terabox sin límites! 📦
*   `#gdrive` ➡️ `#drive`: ¡Archivos de Google Drive a la velocidad de la luz! ⚡
*   `#ttimg` ➡️ `#ttmp3`: ¡Fotos y audios de TikTok al instante! 🖼️
*   `#gitclone`: ¡Clona repositorios de GitHub como un pro! 👨‍💻
*   `#xvideosdl`: ¡Descarga vídeos de Xvideos para tu placer! 😈
*   `#xnxxdl`: ¡Más vídeos de Xnxx para disfrutar! 🔥
*   `#apk` ➡️ `#modapk`: ¡Descarga apps de Aptoide! 📱
*   `#tiktokrandom` ➡️ `#ttrandom`: ¡Sorpréndete con vídeos aleatorios de TikTok! 🎁
*   `#npmdl` ➡️ `#npmdownloader`: ¡Paquetes de NPMJs para tus proyectos! 📦
*   `#animelinks` ➡️ `#animedl`: ¡Enlaces directos para descargar anime! 🎬

╔═════════════════════════════╗
║ 💰 **ECONOMÍA & RPG: ¡Hazte rico!** 💰 ║
╚═════════════════════════════╝
*   `#w` ➡️ `#work` ➡️ `#trabajar`: ¡Gana dinero trabajando duro! 💼
*   `#slut` ➡️ `#protituirse`: ¡Gana dinero... de otra manera! 😈
*   `#cf` ➡️ `#suerte`: ¡Cara o cruz! 🪙 ¡Apuesta y gana!
*   `#crime` ➡️ `#crimen`: ¡Gana dinero... ilegalmente! 🦹
*   `#ruleta` ➡️ `#roulette` ➡️ `#rt`: ¡Apuesta al rojo o negro! Roulette wheel emoji
*   `#casino` ➡️ `#apostar`: ¡Entra al casino y prueba tu suerte! 🎰
*   `#slot`: ¡Gira la ruleta y gana premios! 🍒
*   `#cartera` ➡️ `#wallet`: ¡Mira tu dinero! 💰
*   `#banco` ➡️ `#bank`: ¡Guarda tu dinero a buen recaudo! 🏦
*   `#deposit` ➡️ `#depositar` ➡️ `#d`: ¡Mete tu dinero en el banco! 💸
*   `#with` ➡️ `#retirar` ➡️ `#withdraw`: ¡Saca tu dinero del banco! 🏧
*   `#transfer` ➡️ `#pay`: ¡Pasa dinero a tus amigos! 🤝
*   `#miming` ➡️ `#minar` ➡️ `#mine`: ¡Pica piedra y gana recursos! ⛏️
*   `#buyall` ➡️ `#buy`: ¡Compra dinero con tu XP! 🛍️
*   `#daily` ➡️ `#diario`: ¡Reclama tu recompensa diaria! 🎁
*   `#cofre`: ¡Abre un cofre lleno de sorpresas!  treasure chest emoji
*   `#weekly` ➡️ `#semanal`: ¡Reclama tu regalo semanal! 📅
*   `#monthly` ➡️ `#mensual`: ¡Reclama tu recompensa mensual! 🗓️
*   `#steal` ➡️ `#robar` ➡️ `#rob`: ¡Intenta robar a otro usuario! 😈
*   `#robarxp` ➡️ `#robxp`: ¡Roba experiencia a tus rivales! 🦹
*   `#eboard` ➡️ `#baltop`: ¡Ranking de los más ricos! 🏆
*   `#aventura` ➡️ `#adventure`: ¡Explora nuevos mundos y gana recompensas! 🗺️
*   `#curar` ➡️ `#heal`: ¡Recupera tu salud para seguir la aventura! ❤️‍🩹
*   `#cazar` ➡️ `#hunt` ➡️ `#berburu`: ¡Sal de caza y consigue presas! 🏹
*   `#inv` ➡️ `#inventario`: ¡Mira lo que llevas encima! 🎒
*   `#mazmorra` ➡️ `#explorar`: ¡Explora mazmorras y encuentra tesoros!  dungeon emoji
*   `#halloween`: ¡Truco o trato! 🎃 ¡Solo en Halloween!
*   `#christmas` ➡️ `#navidad`: ¡Regalos navideños! 🎁 ¡Solo en Navidad!

╔═════════════════════════════╗
║ 🎲 **Gacha Mania: ¡Colecciona personajes!** 🎲 ║
╚═════════════════════════════╝
*   `#rollwaifu` ➡️ `#rw` ➡️ `#roll`: ¡Tira los dados y consigue una waifu o husbando! 💖
*   `#claim` ➡️ `#c` ➡️ `#reclamar`: ¡Atrápalo ya! 🎣 ¡Reclama tu personaje!
*   `#harem` ➡️ `#waifus` ➡️ `#claims`: ¡Tu colección de personajes! 🎎
*   `#charimage` ➡️ `#waifuimage` ➡️ `#wimage`: ¡Admira a tu waifu! 🖼️
*   `#charinfo` ➡️ `#winfo` ➡️ `#waifuinfo`: ¡Conoce a tu personaje a fondo! 🤓
*   `#givechar` ➡️ `#givewaifu` ➡️ `#regalar`: ¡Sé generoso y regala un personaje! 🎁
*   `#vote` ➡️ `#votar`: ¡Dale poder a tu personaje! 💪 ¡Vota para subir su valor!
*   `#waifusboard` ➡️ `#waifustop` ➡️ `#topwaifus`: ¡Ranking de los personajes más valiosos! 🏆

╔═════════════════════════════╗
║ 🎨 **Sticker Factory: ¡Crea tus pegatinas!** 🎨 ║
╚═════════════════════════════╝
*   `#sticker` ➡️ `#s`: ¡Convierte imágenes y vídeos en stickers! ✂️
*   `#setmeta`: ¡Ponle tu firma a tus stickers! ✍️
*   `#delmeta`: ¡Borra tu marca de agua! ❌
*   `#pfp` ➡️ `#getpic`: ¡Roba la foto de perfil de quien quieras! 😈
*   `#qc`: ¡Stickers con texto o de otros usuarios! 💬
*   `#toimg` ➡️ `#img`: ¡Convierte stickers en imágenes! 🖼️
*   `#brat` ➡️ `#ttp` ➡️ `#attp`: ¡Stickers de texto con estilo! 📝
*   `#emojimix`: ¡Mezcla emojis y crea stickers únicos! 🤪
*   `#wm`: ¡Cambia el nombre de tus stickers! 🏷️

╔═════════════════════════════╗
║ 🛠️ **Herramientas Ninja: ¡Funciones secretas!** 🛠️ ║
╚═════════════════════════════╝
*   `#calcular` ➡️ `#calcular` ➡️ `#cal`: ¡Resuelve ecuaciones como un genio! 🧮
*   `#tiempo` ➡️ `#clima`: ¡El hombre del tiempo! 🌤️ ¡Entérate del clima en cualquier país!
*   `#horario`: ¡Viaja por el tiempo! 🕰️ ¡Conoce la hora en todo el mundo!
*   `#fake` ➡️ `#fakereply`: ¡Troll level master! 😈 ¡Crea mensajes falsos!
*   `#enhance` ➡️ `#remini` ➡️ `#hd`: ¡Dale una lavada de cara a tus fotos! 🧼
*   `#letra`: ¡Cambia la tipografía de tus textos! ✒️
*   `#read` ➡️ `#readviewonce` ➡️ `#ver`: ¡Espía imágenes de una sola vista! 🕵️
*   `#whatmusic` ➡️ `#shazam`: ¡Adivina la canción! 🎶 ¡Descubre qué suena!
*   `#spamwa` ➡️ `#spam`: ¡Molesta a tus amigos! 😈 ¡Envía spam sin parar!
*   `#ss` ➡️ `#ssweb`: ¡Espía páginas web! 💻 ¡Mira cómo se ven!
*   `#length` ➡️ `#tamaño`: ¡Cambia el tamaño de tus imágenes y vídeos! 📏
*   `#say` ➡️ `#decir`: ¡Repite como un loro! 🦜
*   `#todoc` ➡️ `#toducument`: ¡Crea documentos con todo tipo de archivos! 📁
*   `#translate` ➡️ `#traducir` ➡️ `#trad`: ¡Habla todos los idiomas! 🗣️

╔═════════════════════════════╗
║ 👤 **Perfil VIP: ¡Muestra quién eres!** 👤 ║
╚═════════════════════════════╝
*   `#reg` ➡️ `#verificar` ➡️ `#register`: ¡Regístrate y sé parte de la comunidad! ✅
*   `#unreg`: ¡Deshazte de tu identidad! 👻
*   `#profile`: ¡Muestra tu tarjeta de presentación! 🪪
*   `#marry`: ¡Encuentra el amor! ❤️ ¡Propón matrimonio a otro usuario!
*   `#divorce`: ¡Rompe corazones! 💔 ¡Divórciate sin remordimientos!
*   `#setgenre` ➡️ `#setgenero`: ¡Define tu identidad! 🏳️‍🌈
*   `#delgenre` ➡️ `#delgenero`: ¡Bórrate del mapa! ❌
*   `#setbirth` ➡️ `#setnacimiento`: ¡Pon tu fecha de nacimiento! 🎂
*   `#delbirth` ➡️ `#delnacimiento`: ¡Mantén tu edad en secreto! 🤫
*   `#setdescription` ➡️ `#setdesc`: ¡Escribe tu biografía! ✍️
*   `#deldescription` ➡️ `#deldesc`: ¡Bórrate del mapa! ❌
*   `#lb` ➡️ `#lboard`: ¡Compite por ser el mejor! 🏆 ¡Ranking de usuarios!
*   `#level` ➡️ `#lvl`: ¡Mide tu poder! 💪 ¡Comprueba tu nivel y experiencia!
*   `#comprarpremium` ➡️ `#premium`: ¡Desbloquea funciones exclusivas! 💎
*   `#confesiones` ➡️ `#confesar`: ¡Susurra tus secretos! 🤫 ¡Confiesa tus sentimientos!

╔═════════════════════════════╗
║ 🏘️ **Control de Grupos: ¡Domina la manada!** 🏘️ ║
╚═════════════════════════════╝
*   `#config` ➡️ `#on`: ¡Controla los ajustes del grupo! ⚙️
*   `#hidetag`: ¡Menciona a todos sin que se den cuenta! 😈
*   `#gp` ➡️ `#infogrupo`: ¡Espía la info del grupo! 🕵️
*   `#linea` ➡️ `#listonline`: ¡Quién está conectado! 👁️ ¡Lista de usuarios online!
*   `#setwelcome`: ¡Da la bienvenida con estilo! 👋 ¡Mensaje personalizado!
*   `#setbye`: ¡Despídete con clase! 🥺 ¡Mensaje de despedida!
*   `#link`: ¡Comparte el enlace del grupo! 🔗
*   `#admins` ➡️ `#admin`: ¡Llama a los líderes! 🚨 ¡Menciona a los admins!
*   `#restablecer` ➡️ `#revoke`: ¡Cambia el enlace del grupo! 🔄
*   `#grupo` ➡️ `#group` `[open / abrir]`: ¡Abre el grupo a todos! 🔓
*   `#grupo` ➡️ `#gruop` `[close / cerrar]`: ¡Solo admins! 🔒
*   `#kick` `[número / mención]`: ¡Expulsa a los indeseables! 🚷
*   `#add` ➡️ `#añadir` ➡️ `#agregar` `[número]`: ¡Invita a tus amigos! ➕
*   `#promote` `[mención / etiquetar]`: ¡Dale poder a tus leales! 👑
*   `#demote` `[mención / etiquetar]`: ¡Quítale la corona a los traidores! 😾
*   `#gpbanner` ➡️ `#groupimg`: ¡Cambia la imagen del grupo! 🖼️
*   `#gpname` ➡️ `#groupname`: ¡Renombra el grupo! ✒️
*   `#gpdesc` ➡️ `#groupdesc`: ¡Cambia la descripción del grupo! ✍️
*   `#advertir` ➡️ `#warn` ➡️ `#warning`: ¡Da un toque de atención! ⚠️
*   `#unwarn` ➡️ `#delwarn`: ¡Perdona sus pecados! 🙏
*   `#advlist` ➡️ `#listadv`: ¡Quién se ha portado mal! 😈 ¡Lista de advertidos!
*   `#bot on`: ¡Enciende al bot en este grupo! 🔥
*   `#bot off`: ¡Apaga al bot en este grupo! 💤
*   `#mute` `[mención / etiquetar]`: ¡Silencia a los pesados! 🤫
*   `#unmute` `[mención / etiquetar]`: ¡Dales voz a los callados! 📣
*   `#encuesta` ➡️ `#poll`: ¡Qué opina la gente! 🗳️ ¡Crea una encuesta!
*   `#delete` ➡️ `#del`: ¡Elimina mensajes ajenos! 🗑️
*   `#fantasmas`: ¡Caza a los inactivos! 👻
*   `#kickfantasmas`: ¡Deshazte de los muertos vivientes! 🧟
*   `#invocar` ➡️ `#tagall` ➡️ `#todos`: ¡Despierta a la manada! 📢
*   `#setemoji` ➡️ `#setemo`: ¡Personaliza las invitaciones! 💌
*   `#listnum` ➡️ `#kicknum`: ¡Limpia por prefijo de país! 🧹

╔═════════════════════════════╗
║ 🌸 **Reacciones Anime: ¡Expresa tus emociones!** 🌸 ║
╚═════════════════════════════╝
*   `#angry` ➡️ `#enojado` `[mención]`: ¡Saca tu furia! 😠
*   `#bite` `[mención]`: ¡Muerde con cariño! 😋
*   `#bleh` `[mención]`: ¡Saca la lengua! 😜
*   `#blush` `[mención]`: ¡Ponte rojo de vergüenza! 😳
*   `#bored` ➡️ `#aburrido` `[mención]`: ¡Qué rollo! 😒
*   `#cry` `[mención]`: ¡Llora a moco tendido! 😭
*   `#cuddle` `[mención]`: ¡Acurrúcate con quien quieras! 🤗
*   `#dance` `[mención]`: ¡Mueve el esqueleto! 💃
*   `#drunk` `[mención]`: ¡Veo doble! 😵‍💫
*   `#eat` ➡️ `#comer` `[mención]`: ¡Ñam, ñam! 😋
*   `#facepalm` `[mención]`: ¡Qué vergüenza ajena! 🤦
*   `#happy` ➡️ `#feliz` `[mención]`: ¡Salta de alegría! 😄
*   `#hug` `[mención]`: ¡Apapacha a tus amigos! 🥰
*   `#impregnate` ➡️ `#preg` `[mención]`: ¡Ups, creo que la lié! 🤰
*   `#kill` `[mención]`: ¡Elimina a tus enemigos! 🔪
*   `#kiss` ➡️ `#besar` ➡️ `#kiss2` `[mención]`: ¡Beso, besito, besazo! 😘
*   `#laugh` `[mención]`: ¡Ríe a carcajadas! 😂
*   `#lick` `[mención]`: ¡Ñam, qué rico! 👅
*   `#love` ➡️ `#amor` `[mención]`: ¡El amor está en el aire! 💖
*   `#pat` `[mención]`: ¡Acaricia con cariño! 🥺
*   `#poke` `[mención]`: ¡Molesta a tus amigos! 😈
*   `#pout` `[mención]`: ¡Haz pucheros! 😒
*   `#punch` `[mención]`: ¡Suelta un puñetazo! 👊
*   `#run` `[mención]`: ¡Corre Forrest, corre! 🏃
*   `#sad` ➡️ `#triste` `[mención]`: ¡Qué bajón! 😔
*   `#scared` `[mención]`: ¡Qué miedito! 😨
*   `#seduce` `[mención]`: ¡Enciende la pasión! 🔥
*   `#shy` ➡️ `#timido` `[mención]`: ¡Me da cosita! 🙈
*   `#slap` `[mención]`: ¡Zas, en toda la cara! 😡
*   `#dias` ➡️ `#days`: ¡Buenos días, sol! ☀️
*   `#noches` ➡️ `#nights`: ¡Dulces sueños! 😴
*   `#sleep` `[mención]`: ¡A dormir! 🛌
*   `#smoke` `[mención]`: ¡Fumar es malo! 🚬
*   `#think` `[mención]`: ¡Piénsalo bien! 🤔

╔═════════════════════════════╗
║ 🔞 **NSFW Zone: ¡Solo para adultos!** 🔞 ║
╚═════════════════════════════╝
*   `#anal` `[mención]`: ¡Atrévete a explorar! 🍑
*   `#waifu`: ¡Encuentra a tu waifu ideal! 👰‍♀️
*   `#bath` `[mención]`: ¡Date un baño relajante! 🛀
*   `#blowjob` ➡️ `#mamada` ➡️ `#bj` `[mención]`: ¡Demuestra tu talento! 👄
*   `#boobjob` `[mención]`: ¡Haz una rusa! 👅
*   `#cum` `[mención]`: ¡Llega al orgasmo! 💦
*   `#fap` `[mención]`: ¡Alivia la tensión! 🍆
*   `#ppcouple` ➡️ `#ppcp`: ¡Fotos de perfil para parejas! 💑
*   `#footjob` `[mención]`: ¡Usa tus pies! 🦶
*   `#fuck` ➡️ `#coger` ➡️ `#fuck2` `[mención]`: ¡Dale duro! 😈
*   `#cafe` ➡️ `#coffe`: ¡Un café para dos! ☕
*   `#violar` ➡️ `#perra` `[mención]`: ¡Esto no está bien! 😠
*   `#grabboobs` `[mención]`: ¡Toca las tetas! 🍈🍈
*   `#grop` `[mención]`: ¡Manosea sin permiso! 😡
*   `#lickpussy` `[mención]`: ¡Saborea el néctar! 👅
*   `#rule34` ➡️ `#r34` `[Tags]`: ¡Busca lo que te excite! 🔍
*   `#sixnine` ➡️ `#69` `[mención]`: ¡Posición acrobática! 🤸
*   `#spank` ➡️ `#nalgada` `[mención]`: ¡Nalgada con amor! 🍑
*   `#suckboobs` `[mención]`: ¡Chupa las tetas! 🤤
*   `#undress` ➡️ `#encuerar` `[mención]`: ¡Quítate la ropa! 👙
*   `#yuri` ➡️ `#tijeras` `[mención]`: ¡Acción lésbica! 💋

╔═════════════════════════════╗
║ 🎮 **Game Zone: ¡A jugar!** 🎮 ║
╚═════════════════════════════╝
*   `#amistad` ➡️ `#amigorandom`: ¡Encuentra nuevos amigos! 🙋
*   `#chaqueta` ➡️ `#jalamela`: ¡Hazte una chaqueta! 🍆
*   `#chiste`: ¡Ríete un rato! 😂 ¡Te cuento un chiste!
*   `#consejo`: ¡Pídeme un consejo! 💡 ¡Te iluminaré!
*   `#doxeo` ➡️ `#doxear` `[mención]`: ¡Doxeo falso para reírse! 😈
*   `#facto`: ¡Te suelto un fact! 🤯
*   `#formarpareja`: ¡Encuentra a tu media naranja! 🍊
*   `#formarpareja5`: ¡Crea 5 parejas al azar! 💘
*   `#frase`: ¡Te regalo una frase inspiradora! ✨
*   `#huevo`: ¡Agarra los huevos! 🥚
*   `#chupalo` `[mención]`: ¡Haz que te la chupe! 🍆
*   `#aplauso` `[mención]`: ¡Apláudele a alguien! 👏
*   `#marron` `[mención]`: ¡Racismo del bueno! 🤡
*   `#suicidar`: ¡No lo hagas! 🥺 ¡Suicídate virtualmente!
*   `#iq` ➡️ `#iqtest` `[mención]`: ¡Mide tu inteligencia! 🧠
*   `#meme`: ¡Un meme para alegrarte el día! 🤪
*   `#morse`: ¡Traduce a código Morse!  Morse code emoji
*   `#nombreninja`: ¡Consigue un nombre ninja! 🥷
*   `#paja` ➡️ `#pajeame`: ¡Hazte una paja virtual! 🍆
*   `#personalidad` `[mención]`: ¡Descubre tu personalidad! 🎭
*   `#piropo`: ¡Lanza un piropo! 🥰
*   `#pregunta`: ¡Pregúntame lo que quieras! ❓
*   `#ship` ➡️ `#pareja`: ¡Calcula tu compatibilidad! 💘
*   `#sorteo`: ¡Organiza un sorteo! 🎁
*   `#top`: ¡Crea un ranking de lo que quieras! 🏆
*   `#formartrio` `[mención]`: ¡Monta un trío! 😈
*   `#ahorcado`: ¡Adivina la palabra! 🪢
*   `#genio`: ¡Pregúntale al genio! 🧞
*   `#mates` ➡️ `#matematicas`: ¡Ponte a prueba con las mates! ➕
*   `#ppt`: ¡Piedra, papel o tijera! ✊
*   `#sopa` ➡️ `#buscarpalabra`: ¡Encuentra las palabras ocultas! 🔎
*   `#pvp` ➡️ `#suit` `[mención]`: ¡Duelo a muerte! ⚔️
*   `#ttt`: ¡Tres en raya! ❌⭕
`.trim();

  await conn.sendMessage(m.chat, { 
      text: txt,
      contextInfo: {
          mentionedJid: [m.sender, userId],
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
              newsletterJid: channelRD.id,
              newsletterName: channelRD.name,
              serverMessageId: -1,
          },
          forwardingScore: 999,
          externalAdReply: {
              title: botname,
              body: textbot,
              thumbnailUrl: banner,
              mediaType: 1,
              showAdAttribution: true,
              renderLargerThumbnail: true,
          },
      },
  }, { quoted: m });

};

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = ['menu', 'menú', 'help'];

export default handler;

function clockString(ms) {
    let seconds = Math.floor((ms / 1000) % 60);
    let minutes = Math.floor((ms / (1000 * 60)) % 60);
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    return `${hours}h ${minutes}m ${seconds}s`;
}
