import Vue from 'vue';

import { createDecorator } from 'vue-class-component';

import {
    Component,
    Emit,
    Inject,
    Model,
    Prop,
    Provide,
    Watch,
} from 'vue-property-decorator';

import { Action, Getter, Mutation, namespace, State } from 'vuex-class';

import { HdContainer, HdInject, HdProvide, TYPES } from '../core/framework/ioc';

export {
    Action,
    Component,
    Emit,
    Getter,
    Inject,
    Model,
    Mutation,
    Prop,
    Provide,
    State,
    Vue,
    Watch,
    createDecorator,
    namespace,
    HdContainer,
    HdInject,
    HdProvide,
    TYPES
};
