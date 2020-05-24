console.log("Hi mom!")

if (navigator && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations().then(regs => {
        for (let reg of regs) { reg.unregister() }
    })
}

// navigator.sendBeacon('/analytics', JSON.stringify({
//     'UA': navigator.userAgent,
//     'times': {
//         'arrival': +new Date(),
//         'departure': +new Date()
//     }
// }))
