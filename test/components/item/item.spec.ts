import { mount } from '@vue/test-utils';
import { assert } from 'chai';
import { describe } from 'mocha';

import HdItem from '~/components/item/hd-item.vue';

const wrapper = mount(HdItem);
const vm = wrapper.vm;

wrapper.setProps({
    firstName: 'Daniel',
    lastName: 'Ormeno',
    date: new Date(),
    time: new Date(),
    doctor: 'Lindsay',
    code: '1910',
    urNumber: '12143',
    status: 'admitted'
});
const props = vm.$props;

describe('HdItem', () => {
    describe('updateProp(prop: string, value: any)', () => {

        it ('component has prop `firstName` of type `string`', () => {
            assert.containsAllKeys(props, [
                'firstName',
                'lastName',
                'date',
                'time',
                'doctor',
                'code',
                'urNumber',
                'status'
            ]);
            assert.isString(props.firstName);
            assert.isString(props.lastName);
            assert.isTrue(props.time.constructor === Date);
            assert.isTrue(props.date.constructor === Date);
            assert.isString(props.doctor);
            assert.isString(props.code);
            assert.isString(props.urNumber);
            assert.isString(props.status);
        });
    });
});
