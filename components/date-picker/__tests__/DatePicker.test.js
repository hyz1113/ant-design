import React from 'react';
import { mount } from 'enzyme';
import DatePicker from '..';
import focusTest from '../../../tests/shared/focusTest';

describe('DatePicker', () => {
  focusTest(DatePicker);

  it('prop locale should works', () => {
    const locale = {
      lang: {
        placeholder: 'Избери дата',
        rangePlaceholder: [
          'Начална дата',
          'Крайна дата',
        ],
        today: 'Днес',
        now: 'Сега',
        backToToday: 'Към днес',
        ok: 'Добре',
        clear: 'Изчистване',
        month: 'Месец',
        year: 'Година',
        timeSelect: 'Избор на час',
        dateSelect: 'Избор на дата',
        monthSelect: 'Избор на месец',
        yearSelect: 'Избор на година',
        decadeSelect: 'Десетилетие',
        previousMonth: 'Предишен месец (PageUp)',
        nextMonth: 'Следващ месец (PageDown)',
        previousYear: 'Последна година (Control + left)',
        nextYear: 'Следваща година (Control + right)',
        previousDecade: 'Предишно десетилетие',
        nextDecade: 'Следващо десетилетие',
        previousCentury: 'Последен век',
        nextCentury: 'Следващ век',
        yearFormat: 'YYYY',
        dateFormat: 'D M YYYY',
        dayFormat: 'D',
        dateTimeFormat: 'D M YYYY HH:mm:ss',
        monthBeforeYear: true,
      },
      timePickerLocale: {
        placeholder: 'Избор на час',
      },
    };
    const wrapper = mount(
      <DatePicker open locale={locale} />
    );
    expect(wrapper.render()).toMatchSnapshot();
  });
});