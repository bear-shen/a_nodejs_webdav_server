import os from 'os';

export default {
    // pathPrefix: '/api',
    port: {
        api: 8090,
        webdav: 8095,
    },
    auth: {
        local: {
            name: 'root',
            password: 'root',
        },
    },
    suffix: {
        video: ['mp4', 'avi', 'mkv', 'm4a', '3gp',],
        audio: ['wav', 'flac', 'mp3', 'aac',],
        image: ['jpg', 'png', 'jpeg', 'tif', 'tiff', 'bmp', 'gif', 'webp',],
        text: ['txt', 'html', 'json',],
        subtitle: ['vtt', 'ass', 'ssa', 'sub', 'srt', 'pjs',],
        pdf: ['pdf',],
    } as { [key: string]: Array<any> },
    //
    path: {
        temp: `${os.tmpdir()}/tmp_${process.pid}`,
        local: process.cwd() + '/file',
        webdav: '/webdav',
    },
};
