import { details } from "../src/views/details"

// Supongamos que tu vista de detalles está en un archivo llamado details.js

// Simula la función de obtener datos del API y datos adicionales para la prueba

describe('Details View', () => {
  it('should render movie details', () => {
    // Simula el almacenamiento en sesión con información de la película
    sessionStorage.setItem('cardsMovie', 'your-movie-identifier');

    // Renderiza la vista de detalles
    const detailsView = details();

    // Verifica que la información de la película se haya renderizado correctamente
    expect(detailsView.innerHTML).toContain('Movie Name');
    expect(detailsView.innerHTML).toContain('Movie Description');
    expect(detailsView.innerHTML).toContain('Genre');
    expect(detailsView.innerHTML).toContain('Action');
    expect(detailsView.innerHTML).toContain('Studio');
    expect(detailsView.innerHTML).toContain('Studio X');
    expect(detailsView.innerHTML).toContain('Year');
    expect(detailsView.innerHTML).toContain('2023');

    // También puedes realizar afirmaciones sobre la información adicional no proveniente de la API
    // Asumiendo que hay un elemento con la clase "additional-info" que debería contener cierta información
    expect(detailsView.querySelector('.additional-info').textContent).toContain('Additional Information');
  }
  )})