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

*"¡Hola,* *!Soy *${botname}*. *¡Aquí está mi lista de comandos!* *Espero que encuentres lo que necesitas*. 🥹"* 
𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙢𝙞 𝙡𝙞𝙨𝙩𝙖 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨 💝
╭┈ ↷
│ᰔᩚ 𝘾𝙡𝙞𝙚𝙣𝙩𝙚 »
│° 𝘾𝙡𝙞𝙚𝙣𝙩𝙚 @${userId.split('@')[0]}
│❀ 𝙈𝙤𝙙𝙤 » 𝙋𝙪𝙗𝙡𝙞𝙘𝙤
│✦ 𝘽𝙤𝙩 » ${(conn.user.jid == global.conn.user.jid ? 'Principal 🅥' : 'Prem Bot 🅑')}
│ⴵ 𝘼𝙘𝙩𝙞𝙫𝙖𝙙𝙖 » ${uptime}
│✰ 𝙐𝙨𝙪𝙖𝙧𝙞𝙤𝙨 » ${totalreg}
│✧ 𝘾𝙤𝙢𝙖𝙣𝙙𝙤𝙨 » ${totalCommands}
│🜸 𝘽𝙖𝙞𝙡𝙚𝙮𝙨 » 𝙈𝙪𝙡𝙩𝙞 𝘿𝙚𝙫𝙞𝙘𝙚
╰─────────────────
𝘾𝙧𝙚𝙖 𝙪𝙣 *𝙎𝙪𝙗-𝘽𝙤𝙩* 𝙘𝙤𝙣 𝙩𝙪 𝙣ú𝙢𝙚𝙧𝙤 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙣𝙙𝙤 *#qr* o *#𝙘𝙤𝙙𝙚*

 *༺༒☨𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙢𝙞 𝙢𝙚𝙣𝙪☨༒༻*

🌸✨ 𝓗𝓲𝓷𝓪𝓽𝓪-𝓑𝓸𝓽 ✨🌸
"¡Hola, *! Soy ★[ʜɪɴᴀᴛᴀ-ʙᴏᴛ]★*. ¡Aquí está mi lista de comandos! Espero que encuentres lo que necesitas. 🥹"

╭── • 🌸 • ── ✦ ── • 🌸 • ──╮
│ 🍥 Cliente: 
│ 🌟 Estado: Bot principal 
│ 🏮 Modo: Público
│ 🐾 Usuarios: 
│ 🎐 Comandos: 320
│ 🖤 Plataforma: Multi Device
│ 😮‍💨 Creador: ༒★Jhon★༒
╰───────────╯

        🌸 **𝒞𝓇𝑒𝒶 𝓉𝓊 𝒮𝓊𝒷-𝐵𝑜𝓉**
⎔ Usa: *#qr* o *#code*

🌟 **『 𝐼𝓃𝒻ℴ-𝐵𝑜𝓉 』** 🌟
⎔ *#help • #menu* → Ver la lista de comandos de la Bot.
⎔ *#uptime • #runtime* → Ver tiempo activo o en linea de la Bot.
⎔ *#sc • #script* → Link del repositorio oficial de la Bot
⎔ *#staff • #colaboradores* → Ver la lista de desarrolladores de la Bot.
⎔ *#serbot • #serbot code* → Crea una sesión de Sub-Bot.
⎔ *#bots • #sockets* → Ver la lista de Sub-Bots activos.
⎔ *#creador* → Contacto del creador de la Bot.
⎔ *#status • #estado* → Ver el estado actual de la Bot.
⎔ *#links • #grupos* → Ver los enlaces oficiales de la Bot.
⎔ *#infobot • #infobot* → Ver la información completa de la Bot.
⎔ *#sug • #newcommand* → Sugiere un nuevo comando.
⎔ *#p • #ping* → Ver la velocidad de respuesta del Bot.
⎔ *#reporte • #reportar* → Reporta alguna falla o problema de la Bot.
⎔ *#sistema • #system* → Ver estado del sistema de alojamiento.
⎔ *#speed • #speedtest* → Ver las estadísticas de velocidad de la Bot.
⎔ *#views • #usuarios* → Ver la cantidad de usuarios registrados en el sistema.
⎔ *#funciones • #totalfunciones* → Ver todas las funciones de la Bot.
⎔ *#ds • #fixmsgespera* → Eliminar archivos de sesión innecesarios.
⎔ *#editautoresponder* → Configurar un Prompt personalizado de la Bot.

     🌸 **『 𝐵𝓊𝓈𝒸𝒶𝒹ℴ𝓇ℯ𝓈 』** 🌸
⎔ *#tiktoksearch • #tiktoks* → Buscador de videos de tiktok.
⎔ *#tweetposts* → Buscador de posts de Twitter/X.
⎔ *#ytsearch • #yts* → Realiza búsquedas de Youtube.
⎔ *#githubsearch* → Buscador de usuarios de GitHub.
⎔ *#cuevana • #cuevanasearch* → Buscador de películas/series por Cuevana.
⎔ *#google* → Realiza búsquedas por Google.
⎔ *#pin • #pinterest* → Buscador de imagenes de Pinterest.
⎔ *#imagen • #image* → buscador de imagenes de Google.
⎔ *#animesearch • #animess* → Buscador de animes de tioanime.
⎔ *#animei • #animeinfo* → Buscador de capítulos de #animesearch.
⎔ *#infoanime* → Buscador de información de anime/manga.
⎔ *#hentaisearch • #searchhentai* → Buscador de capítulos hentai.
⎔ *#xnxxsearch • #xnxxs* → Buscador de vídeos de Xnxx.
⎔ *#xvsearch • #xvideossearch* → Buscador de vídeos de Xvideos.
⎔ *#pornhubsearch • #phsearch* → Buscador de videos de Pornhub.
⎔ *#npmjs* → Buscandor de npmjs.

      🌸 **『 𝒟ℯ𝓈𝒸𝒶𝓇𝑔𝒶𝓈 』** 🌸
⎔ *#tiktok • #tt* → Descarga videos de TikTok.
⎔ *#mediafire • #mf* → Descargar un archivo de MediaFire.
⎔ *#pinvid • #pinvideo* + [enlacé] → Descargar vídeos de Pinterest.
⎔ *#mega • #mg* + [enlacé] → Descargar un archivo de MEGA.
⎔ *#play • #play2* → Descarga música/video de YouTube.
⎔ *#ytmp3 • #ytmp4* → Descarga música/video de YouTube mediante url.
⎔ *#fb • #facebook* → Descarga videos de Facebook.
⎔ *#twitter • #x* + [Link] → Descargar un video de Twitter/X
⎔ *#ig • #instagram* → Descarga contenido de Instagram.
⎔ *#tts • #tiktoks* + [busqueda] → Buscar videos de tiktok
⎔ *#terabox • #tb* + [enlace] → Descargar archivos por Terabox.
⎔ *#gdrive • #drive* + [enlace] → Descargar archivos por Google Drive.
⎔ *#ttimg • #ttmp3* + <url> → Descarga fotos/audios de tiktok.
⎔ *#gitclone* + <url> → Descarga un repositorio de github.
⎔ *#xvideosdl* → Descarga videos porno de (Xvideos).
⎔ *#xnxxdl* → Descarga videos porno de (xnxx).
⎔ *#apk • #modapk* → Descarga un apk de Aptoide.
⎔ *#tiktokrandom • #ttrandom* → Descarga un video aleatorio de tiktok.
⎔ *#npmdl • #npmdownloader* → Descarga paquetes de NPMJs.
⎔ *#animelinks • #animedl* → Descarga Links disponibles de descargas.

          🌸 **『 𝒢𝒶𝒸𝒽𝒶 』** 🌸
⎔ *#rollwaifu • #rw • #roll* → Waifu o husbando aleatorio.
⎔ *#claim • #c • #reclamar* → Reclamar un personaje.
⎔ *#harem • #waifus • #claims* → Ver tus personajes reclamados.
⎔ *#charimage • #waifuimage • #wimage*  → Ver una imagen aleatoria de un personaje.
⎔ *#charinfo • #winfo • #waifuinfo* → Ver información de un personaje.
⎔ *#givechar • #givewaifu • #regalar* → Regalar un personaje a otro usuario.
⎔ *#vote • #votar* → Votar por un personaje para subir su valor.
⎔ *#waifusboard • #waifustop • #topwaifus* → Ver el top de personajes con mayor valor.

🌸 **『 𝐸𝒸ℴ𝓃𝑜𝓂𝒾𝒶 🪙 』** 🌸
⎔ *#w • #work • #trabajar* → Trabaja para ganar ¥enes.
⎔ *#slut • #protituirse* → Trabaja como prostituta y gana ¥enes.
⎔ *#cf • #suerte* → Apuesta tus ¥enes a cara o cruz.
⎔ *#crime • #crimen* → Trabaja como ladrón para ganar ¥enes.
⎔ *#ruleta • #roulette • #rt* → Apuesta ¥enes al color rojo o negro.
⎔ *#casino • #apostar* → Apuesta tus ¥enes en el casino.
⎔ *#slot* → Apuesta tus ¥enes en la ruleta y prueba tu suerte.
⎔ *#cartera • #wallet* → Ver tus ¥enes en la cartera.
⎔ *#banco • #bank* → Ver tus ¥enes en el banco.
⎔ *#deposit • #depositar • #d* → Deposita tus ¥enes al banco.
⎔ *#with • #retirar • #withdraw* → Retira tus ¥enes del banco.
⎔ *#transfer • #pay* → Transfiere ¥enes o XP a otros usuarios.
⎔ *#miming • #minar • #mine* → Trabaja como minero y recolecta recursos.
⎔ *#buyall • #buy* → Compra ¥enes con tu XP.
⎔ *#daily • #diario* → Reclama tu recompensa diaria.
⎔ *#cofre* → Reclama un cofre diario lleno de recursos.
⎔ *#weekly • #semanal* → Reclama tu regalo semanal.
⎔ *#monthly • #mensual* → Reclama tu recompensa mensual.
⎔ *#steal • #robar • #rob* → Intenta robarle ¥enes a alguien.
⎔ *#robarxp • #robxp* → Intenta robar XP a un usuario.
⎔ *#eboard • #baltop* → Ver el ranking de usuarios con más ¥enes.
⎔ *#aventura • #adventure* → Aventúrate en un nuevo reino y recolecta recursos.
⎔ *#curar • #heal* → Cura tu salud para volverte aventurar.
⎔ *#cazar • #hunt • #berburu* → Aventúrate en una caza de animales.
⎔ *#inv • #inventario* → Ver tu inventario con todos tus ítems.
⎔ *#mazmorra • #explorar* → Explorar mazmorras para ganar ¥enes.
⎔ *#halloween* → Reclama tu dulce o truco (Solo en Halloween).
⎔ *#christmas • #navidad* → Reclama tu regalo navideño (Solo en Navidad).

       🌸 **『 𝒜𝓃𝒾𝓂ℯ 』** 🌸
⎔ *#hug* → ¡Dale un abrazo a alguien! 
⎔ *#kiss* → ¡Un beso especial! 
⎔ *#slap* → ¡Da una bofetada divertida! 
⎔ *#cry* → Expresa tu tristeza. 
⎔ *#angry • #enojado* + <mencion> → Estar enojado
⎔ *#bite* + <mencion> → Muerde a alguien
⎔ *#bleh* + <mencion> → Sacar la lengua
⎔ *#blush* + <mencion> → Sonrojarte
⎔ *#bored • #aburrido* + <mencion> → Estar aburrido
⎔ *#cuddle* + <mencion> → Acurrucarse
⎔ *#dance* + <mencion> → Sacate los pasitos prohíbidos
⎔ *#drunk* + <mencion> → Estar borracho
⎔ *#eat • #comer* + <mencion> → Comer algo delicioso
⎔ *#facepalm* + <mencion> → Darte una palmada en la cara
⎔ *#happy • #feliz* + <mencion> → Salta de felicidad
⎔ *#impregnate • #preg* + <mencion> → Embarazar a alguien
⎔ *#kill* + <mencion> → Toma tu arma y mata a alguien
⎔ *#kiss • #besar* • #kiss2 + <mencion> → Dar un beso
⎔ *#laugh* + <mencion> → Reírte de algo o alguien
⎔ *#lick* + <mencion> → Lamer a alguien
⎔ *#love • #amor* + <mencion> → Sentirse enamorado
⎔ *#pat* + <mencion> → Acaricia a alguien
⎔ *#poke* + <mencion> → Picar a alguien
⎔ *#pout* + <mencion> → Hacer pucheros
⎔ *#punch* + <mencion> → Dar un puñetazo
⎔ *#run* + <mencion> → Correr
⎔ *#sad • #triste* + <mencion> → Expresar tristeza
⎔ *#scared* + <mencion> → Estar asustado
⎔ *#seduce* + <mencion> → Seducir a alguien
⎔ *#shy • #timido* + <mencion> → Sentir timidez
⎔ *#slap* + <mencion> → Dar una bofetada
⎔ *#dias • #days* → Darle los buenos días a alguien
⎔ *#noches • #nights* → Darle las buenas noches a alguien
⎔ *#sleep* + <mencion> → Tumbarte a dormir
⎔ *#smoke* + <mencion> → Fumar
⎔ *#think* + <mencion> → Pensar en algo

        🌸 **『 𝒥𝓊ℯ𝑔ℴ𝓈 』** 🌸
⎔ *#ppt* → Piedra, papel o tijeras. ✂️
⎔ *#ahorcado* → Juega al ahorcado.
⎔ *#mates* → ¡Resuelve problemas matemáticos!
⎔ *#amistad • #amigorandom* → hacer amigos con un juego.
⎔ *#chaqueta • #jalamela* → Hacerte una chaqueta.
⎔ *#chiste* → La bot te cuenta un chiste.
⎔ *#consejo* → La bot te da un consejo.
⎔ *#doxeo • #doxear* + <mencion> → Simular un doxeo falso.
⎔ *#facto* → La bot te lanza un facto.
⎔ *#formarpareja* → Forma una pareja.
⎔ *#formarpareja5* → Forma 5 parejas diferentes.
⎔ *#frase* → La bot te da una frase.
⎔ *#huevo* → Agarrale el huevo a alguien.
⎔ *#chupalo* + <mencion> → Hacer que un usuario te la chupe.
⎔ *#aplauso* + <mencion> → Aplaudirle a alguien.
⎔ *#marron* + <mencion> → Burlarte del color de piel de un usuario.
⎔ *#suicidar* → Suicidate.
⎔ *#iq • #iqtest* + <mencion> → Calcular el iq de alguna persona.
⎔ *#meme* → La bot te envía un meme aleatorio.
⎔ *#morse* → Convierte un texto a codigo morse.
⎔ *#nombreninja* → Busca un nombre ninja aleatorio.
⎔ *#paja • #pajeame* → La bot te hace una paja.
⎔ *#personalidad* + <mencion> → La bot busca tu personalidad.
⎔ *#piropo* → Lanza un piropo.
⎔ *#pregunta* → Hazle una pregunta a la bot.
⎔ *#ship • #pareja* → La bot te da la probabilidad de enamorarte de una persona.
⎔ *#sorteo* → Empieza un sorteo.
⎔ *#top* → Empieza un top de personas.
⎔ *#formartrio* + <mencion> → Forma un trio.
⎔ *#ahorcado* → Diviertete con la bot jugando el juego ahorcado.
⎔ *#genio* → Comienza una pregunta con el genio.
⎔ *#mates • #matematicas* → Responde las preguntas de matemáticas para ganar recompensas.
⎔ *#sopa • #buscarpalabra* → Juega el famoso juego de sopa de letras.
⎔ *#pvp • #suit* + <mencion> → Juega un pvp contra otro usuario.
⎔ *#ttt* → Crea una sala de juego.

      🌸 **『 𝒰𝓉𝒾𝓁𝒾𝒹𝒶𝒹ℯ𝓈 』** 🌸
⎔ *#calcular* → Realiza cálculos matemáticos.
⎔ *#translate* → Traduce textos.
⎔ *#ss* → Captura la pantalla de un sitio web.
⎔ *#tiempo • #clima* → Ver el clima de un pais.
⎔ *#horario* → Ver el horario global de los países.
⎔ *#fake • #fakereply* → Crea un mensaje falso de un usuario.
⎔ *#enhance • #remini • #hd* → Mejora la calidad de una imagen.
⎔ *#letra* → Cambia la fuente de las letras.
⎔ *#read • #readviewonce • #ver* → Ver imágenes de una sola vista.
⎔ *#whatmusic • #shazam* → Descubre el nombre de canciones o vídeos.
⎔ *#spamwa • #spam* → Envia spam aun usuario.
⎔ *#length • #tamaño* → Cambia el tamaño de imágenes y vídeos.
⎔ *#say • #decir* + [texto] → Repetir un mensaje.
⎔ *#todoc • #toducument* → Crea documentos de (audio, imágenes y vídeos).

       🌸 ⊹˚• `OWNERS` •˚⊹ 🌸 

⎔ *#addowner • #delowner* → Agrega o elimina un número de la lista de owners.
⎔ *#codigo* → Crea un token o código de canjeó de códigos.
⎔ *#backup • #copia* → Crear un respaldo de seguridad de la *db* del Bot.
⎔ *#bcgc* → Envia un mensaje a todos los grupos donde este el Bot.
⎔ *#cleanfiles* → Elimina archivos temporales.
⎔ *#addcoins • #añadircoin* → Añade coins a un usuario.
⎔ *#userpremium • #addprem* → Otorgar premium a un usuario.
⎔ *#delprem #remove* → Quitar premium a un usuario.
⎔ *#addexp • #añadirxp* → Añade XP a un usuario.
⎔ *#autoadmin* → El Bot dara admin automáticamente solo si el Bot es admin.
⎔ *#listban • #banlist* → Lista de usuarios y chats baneados.
⎔ *#banuser* → Banear a un usuario.
⎔ *#unbanuser* → Desbanear a un usuario.
⎔ *#dsowner • #delai* → Elimina archivos innecesarios de sesión.
⎔ *#cleartmp • #vaciartmp* → Elimina archivo innecesarios de la carpeta tmp.
⎔ *#block • #unblock* → Bloquear o desbloquear a un usuario del número del Bot.
⎔ *#listblock • #blocklist* → Ver listado de usuarios bloqueados.
⎔ *#removecoin • #quitarcoin* → Quitar coins a un usuario.
⎔ *#deletedatauser • #resetuser* → Restablecer los datos de un usuario.
⎔ *#removexp • #quitarxp* → Quitar XP a un usuario.
⎔ *#newgc #creargc* → Crea un nuevo grupo desde el número del Bot.
⎔ *#deletefile* → Elimina archivos del Bot
⎔ *#get • #fetch* → Ver el estado de una página web.
⎔ *#plugin • #getplugin* → Extraer un plugin de los archivos del Bot.
⎔ *#grouplist • #listgroup* → Ver listado de grupos en los que está unido el Bot.
⎔ *#join • #invite* → Agregar el Bot a un grupo mediante el enlace de invitación.
⎔ *#leave • #salir* → Sacar el Bot de un grupo.
⎔ *#let* → Envia un mensaje con una duración de 1 hora.
⎔ *#prefix* → Ver o cambiar el prefijo del Bot.
⎔ *#resetprefix* → Restablecer el prefijo del Bot.
⎔ *#reiniciar • #restart* → Reiniciar el servidor del Bot.
⎔ *#reunion • #meeting* → Envia un aviso de reunión a los owners.
⎔ *#savejs • #savefile* → Guarda un archivo en una de las rutas del Bot.
⎔ *#saveplugin* → Guarda un plugin en la carpeta de comandos del Bot.
⎔ *#setbanner* → Cambia la imagen del menu principal del Bot.
⎔ *#setavatar* → Cambia la imagen del catálogo.
⎔ *#addcmd • #setcmd* → Guarda un sticker/imagen como texto o comando.
⎔ *#delcmd* → Elimina el texto/comando del Bot.
⎔ *#cmdlist • #listcmd* → Ver listado de textos/comandos.
⎔ *#setimage • #setpfp* → Cambia la foto del perfil del Bot.
⎔ *#setmoneda* → Cambia la moneda del Bot.
⎔ *#setname* → Cambia el nombre del Bot
⎔ *#setbio • #setstatus* → Cambia la biografía del Bot.
⎔ *#update* → Actualiza el Bot a la versión más reciente de GitHub.

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
