class Video{
    constructor(
        public readonly nombre:string,
        public readonly duracion:number,
        public readonly formato:"mp4" | "mkv" | "web",
    ) {}
}
const mivideo: Video = new Video("vacaciones", 60, "mp4");

console.log(`mi video de: ${mivideo.nombre}`);
console.log(`tiene una duracion de: ${mivideo.duracion} segundos`);
console.log(`y el formato es: ${mivideo.formato}`);