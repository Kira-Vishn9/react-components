import { ICardData, ICardProps, IAppState } from '../interface';

describe('Interfaces', () => {
  describe('ICardData', () => {
    it('should allow any additional properties', () => {
      const data: ICardData = {
        textInput: 'hello',
        customInput: 'world', // any additional properties allowed
      };
      expect(data.customInput).toBe('world');
    });
    it('should have optional properties', () => {
      const data: ICardData = {
        textInput: 'hello',
        selectInput: 'option1',
      };
      expect(data.dateInput).toBeUndefined();
      expect(data.checkboxInput).toBeUndefined();
    });
    it('should allow array of tags', () => {
      const data: ICardData = {
        tags: ['tag1', 'tag2'],
      };
      expect(data.tags).toHaveLength(2);
      expect(data.tags).toContain('tag1');
    });
  });

  describe('ICardProps', () => {
    it('should have data of type ICardData', () => {
      const props: ICardProps = {
        data: {
          textInput: 'hello',
        },
      };
      expect(props.data.textInput).toBe('hello');
    });
  });

  describe('IAppState', () => {
    it('should have initial values', () => {
      const state: IAppState = {
        cardData: {},
        cards: [],
        errorData: {},
      };
      expect(state.cards).toHaveLength(0);
    });
  });
});
