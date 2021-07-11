export function listComponent(todo) {
    return `<li>
                <i class="fas fa-star"></i>
                ${todo}
                <i class="fas fa-check"></i>
                <i class="fas fa-trash"></i>
            </li>`
}