import {
    ADD_SERVICE,
    REMOVE_SERVICE,
    CHANGE_SERVICE_FIELD,
    CLEAR_SERVICE_FIELD,
    START_EDIT_SERVICE,
    FILTER_SERVICES
} from './actionTypes';

export function addService(id, service, price) {
    return { type: ADD_SERVICE, payload:{ id, service, price } };
}

export function removeService(id) {
    return { type:REMOVE_SERVICE, payload: { id } };
}

export function changeServiceField(name, value) {
    return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}
export function clearServiceField() {
    return { type: CLEAR_SERVICE_FIELD };
}
export function startEditService(id, service, price) {
    return { type: START_EDIT_SERVICE, payload: { id, service, price } };
}
export function filterServices(mask) {
    return { type: FILTER_SERVICES, payload: { mask } };
}
