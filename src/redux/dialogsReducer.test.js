import dialogsReducer, { setDialogs, setMessages } from "./dialogsReducer";

it('dialog should be set', () => {
    const state = {
        dialogsData: []
    };
    const action = setDialogs([
        { name: 'Хажибек', id: 1 },
        { name: 'МЯКИШ', id: 4 }
    ]);

    const newState = dialogsReducer(state, action);


    expect(newState.dialogsData.length).toBe(2);
});


it('list of messages should be set', () => {
    const state = {
        messagesData: []
    };
    const messages = [
        { message: 'Прив че дел', id: 1 },
        { message: 'Приват', id: 2 }
    ]
    const action = setMessages(messages);

    const newState = dialogsReducer(state, action);

    expect(newState.messagesData.length).toBe(messages.length)
});