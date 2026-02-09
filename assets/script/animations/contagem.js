export function iniciarContadores() {
    const contadores = document.querySelectorAll('[data-target]');

    contadores.forEach(contador => {
        const alvo = contador;
        const target = parseInt(alvo.dataset.target, 10);
        const prefix = alvo.dataset.prefix || '';
        const suffix = alvo.dataset.suffix || '';

        if (isNaN(target)) return;

        let current = 0;
        const duration = 4000; 
        const increment = target / (duration / 12); // fps

        const attContador = () => {
            current += increment;

            if (current < target) {
                alvo.textContent = prefix + Math.ceil(current) + suffix;
                requestAnimationFrame(attContador);
            } else {
                alvo.textContent = prefix + target + suffix;
            }
        };

        attContador();
    });
}