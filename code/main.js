
export function register(runtime) {
    runtime.registerGenerator('checkerboard', (canvas, params) => {
        const ctx = canvas.getContext('2d');
        const s = params.size || 20; for (let y = 0; y < canvas.height; y += s) { for (let x = 0; x < canvas.width; x += s) { ctx.fillStyle = ((x/s + y/s) % 2 === 0) ? '#e0e0e0' : '#ffffff'; ctx.fillRect(x, y, s, s); } }
    });
}
