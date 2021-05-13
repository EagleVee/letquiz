import lodash from "lodash";
import {
  QUESTION_TYPE_WRITE,
  QUESTION_TYPE_FLASH_CARD,
  QUESTION_TYPE_MULTIPLE_CHOICES,
} from "../Config/LearnConfig";

export function randomizeCards(cards) {
  return [...cards].sort(() => (lodash.random(1) === 1 ? -1 : 1));
}

export function getLearnSet(
  cards,
  hasMultipleChoices,
  hasFlashCard,
  hasWrite,
  hasTermAsChoice,
) {
  const result = [];
  for (const index in cards) {
    const card = cards[index];
    const types = [];
    if (hasMultipleChoices) {
      types.push(QUESTION_TYPE_MULTIPLE_CHOICES);
    }
    if (hasFlashCard) {
      types.push(QUESTION_TYPE_FLASH_CARD);
    }
    if (hasWrite) {
      types.push(QUESTION_TYPE_WRITE);
    }
    const type = types[lodash.random(types.length - 1)];
    if (type === QUESTION_TYPE_MULTIPLE_CHOICES) {
      const cardsWithoutCurrent = [...cards];
      cardsWithoutCurrent.splice(index, 1);
      let randomCards = getRandom(cardsWithoutCurrent, 3);
      randomCards.push(card);
      randomCards = randomizeCards(randomCards);
      if (hasTermAsChoice) {
        const isUsingTermAsChoice = lodash.random(1) === 1;
        if (isUsingTermAsChoice) {
          result.push({
            question: card.definition,
            answer: card.term,
            choices: randomCards.map(e => e.term),
            type: type,
          });
          continue;
        }
      }
      result.push({
        question: card.term,
        answer: card.definition,
        choices: randomCards.map(e => e.definition),
        type: type,
      });
    } else if (type === QUESTION_TYPE_FLASH_CARD) {
      result.push({
        ...card,
        type: type,
      });
    } else if (type === QUESTION_TYPE_WRITE) {
      if (hasTermAsChoice) {
        const isUsingTermAsChoice = lodash.random(1) === 1;
        if (isUsingTermAsChoice) {
          result.push({
            question: card.definition,
            answer: card.term,
            type: type,
          });
          continue;
        }
      }

      result.push({
        question: card.definition,
        answer: card.term,
        type: type,
      });
    }
  }

  return result;
}

function getRandom(arr, n) {
  if (n > len) n = len;
  let result = new Array(n);
  let len = arr.length;
  let taken = new Array(len);
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}
