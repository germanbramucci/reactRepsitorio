import React from "react"
const Footer = () => {
    return(
        <div className="container-fluid p-3 mb-2 bg-dark text-white">
            <div class="row justify-content-evenly">
                <div class="col-4">
                    <p>Gracias por elegirnos a la hora de buscar tu remera retro favorita!</p>
                </div>
                <div class="col-4">
                    <p>Nustras Redes son:</p>
                        <ul>
                            <li>Instagram: @DecaRetro</li>
                            <li>Facebook: Deca Retro</li>
                            <li>TikTok: @RetroDeca</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;