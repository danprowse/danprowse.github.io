export function listComponent(todo) {
    return `<li>
                ${todo}
                <i class="fas fa-check complete"></i>
                <i class="fas fa-times delete"></i>
            </li>`
}