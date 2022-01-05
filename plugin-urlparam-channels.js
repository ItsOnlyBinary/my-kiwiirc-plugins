kiwi.plugin('url-channels', function(kiwi, log) {
    const Misc = kiwi.require('helpers/Misc');

    kiwi.on('network.connecting', function (event) {
        const network = event.network;
        const channels = (Misc.queryStringVal('channels') || '')
            .trim()
            .split(',')
            .filter(function (channel) { return !!channel });

        channels.forEach(function (channel) {
            const activeBuffer = kiwi.state.getActiveBuffer(network.id);
            const bufferName = (channel[0] !== '#') ? '#' + channel : channel;
            const newBuffer = kiwi.state.addBuffer(network.id, bufferName);
            newBuffer.enabled = true;

            if (!activeBuffer || !activeBuffer.isChannel()) {
                kiwi.state.setActiveBuffer(network.id, newBuffer.name);
            }
        });
    });
});
