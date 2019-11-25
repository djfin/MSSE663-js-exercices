import { expect } from 'chai';
import 'mocha';
import {originalNumbers, 
    spreadNumbers, 
    originalContenders, 
    spreadContenders, 
    originalPersons, 
    spreadPersons,
    originalUpdates, 
    newUpdates,
    update,
    data} from './spread'

describe('test for for spread.spec.ts', () =>{
    it('should output numbers', () =>{
        expect(spreadNumbers).eql(originalNumbers)
    })
    it('should output contenders', () =>{
        expect(spreadContenders.length).to.equal(originalContenders)
    })
    it('should output persons', () =>{
        expect(spreadPersons).to.eql(originalPersons)
    })
    it('should output updates', () =>{
        expect(newUpdates(update, ...data)).to.eql(originalUpdates)
    })
})