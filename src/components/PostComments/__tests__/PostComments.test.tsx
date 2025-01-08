import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '../index';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    it('Deve permitir a inserção de dois comentários', () => {
        render(<PostComment />);

        const textarea = screen.getByTestId('comment-input');
        const button = screen.getByTestId('submit-button');

        fireEvent.change(textarea, {target: {value:'Primeiro comentário'}});
        fireEvent.click(button);

        fireEvent.change(textarea, {target: {value:'Segundo comentário'}});
        fireEvent.click(button);

        expect(screen.getByTestId('comment-0')).toHaveTextContent('Primeiro comentário');
        expect(screen.getByTestId('comment-1')).toHaveTextContent('Segundo comentário');
    })
});