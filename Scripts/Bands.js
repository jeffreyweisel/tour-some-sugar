import { getBands } from "./database.js"

const bands = getBands()

export const Bands = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += `<li
                data-type="band"
                data-id="${band.id}"
                data-name="${band.name}"
                >${band.name}</li>`
                
    }

    html += "</ul>"

    return html
}