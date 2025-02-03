import React from 'react';
import './UXvsUI.css';

const UXvsUI = () => {
    return (
        <div className='ux-ui-table'>
            <h2>Diferencias entre UX y UI</h2>
            <table>
                <thead>
                    <tr>
                        <th className="titulo-usabilidad">Aspecto</th>
                        <th>UX (User Experience)</th>
                        <th>UI (User Interface)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Enfoque</td>
                        <td>Se centra en la experiencia general del usuario al interactuar con un producto.</td>
                        <td>Se centra en el diseño visual y la presentacion de la interfaz.</td>
                    </tr>
                    <tr>
                        <td>Objetivo</td>
                        <td>Asegurar que el producto sea útil, facil de usar y satisfactorio.</td>
                        <td>Asegurar que la interfaz sea atractiva, coherente y visualmente agradable</td>
                    </tr>
                    <tr>
                        <td>Componentes</td>
                        <td>Investigación de usuarios, arquitectura de información, flujos de usuario, pruebas.</td>
                        <td>Diseño gráfico, tipografía, colores, iconos, botones, y otros elementos visuales.</td>
                    </tr>
                    <tr>
                        <td>Resultado</td>
                        <td>Una experiencia fluida y satisfactoria para el usuario.</td>
                        <td>Una interfaz visualmente atractiva y funcional.</td>
                    </tr>
                    <tr>
                        <td>Ejemplo</td>
                        <td>Cómo se siente el usuario al completar una compra en una tienda en línea.</td>
                        <td>Cómo se ven y se comportan los botones y menús en la tienda en línea.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UXvsUI;