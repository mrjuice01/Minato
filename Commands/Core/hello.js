module.exports = {
    name: "hi",
    alias: ["hello"],
    desc: "Say hello to bot.",
    react: "🧣",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        await Miku.sendMessage(m.from,{text:`Konichiwa *${pushName}* senpai, I am *${botName}* botby Mr Juice🤤. type *${prefix}help* to get my full command list.`},{quoted:m})
    }
}