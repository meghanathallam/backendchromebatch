var chai = require('chai')
var assert = chai.assert
var should = chai.should()
var expect = chai.expect

describe('Assert check',function(){
    let userName = 'Adfar Rashid'
    let mylist = {
        item : [{
            id:1,name:'Piyush'
        }],
        title:"User List"
    }
    it('check String',function(){
        assert.typeOf(userName,'string')
    })
    it('name equal check',function(){
        assert.equal(userName,'Adfar Rashid')
    })
    it('length match',function(){
        assert.lengthOf(mylist.item,1)
    })
})

describe('should case',function(){
    let userName = 'Adfar Rashid'
    let mylist = {
        item : [{
            id:1,name:'Piyush'
        }],
        title:"User List"
    }
    it('check string',function(){
        userName.should.be.a('string')
    })
    it('equal check',function(){
        userName.should.equal('Adfar Rashid')
    })
    it('length check',function(){
        userName.should.have.lengthOf(12)
    })
})
describe('chechk expect',function(){
    let userName = 'Adfar Rashid'
    let mylist = {
        item : [{
            id:1,name:'Piyush'
        }],
        title:"User List",
        address:{
            country:'India',
            PhoneNo:['7006525041','7006123456']
        }
    }
    it('string match',function(){
        expect(userName).to.be.a('string')
    })
    it('equal match',()=>{
      expect(userName).to.equal('Adfar Rashid')
    })
    it('length match',()=>{
        expect(userName).to.lengthOf(12)
    })
    it('length match',()=>{
        expect(mylist).to.have.property('item').with.lengthOf(1)
    })
    it('length match',()=>{
        expect(mylist).to.have.all.keys('item','title','address')
    })
    it('phone No',()=>{
        expect(mylist).to.have.nested.property('address.PhoneNo[0]')
    })
    it('Country',()=>{
        //expect(mylist).to.have.nested.property('address.country')
       // expect(mylist).to.have.nested.include({'address.country':'India'})
        expect(mylist).to.have.nested.include({'address.PhoneNo[0]':'700df6525041'})

    })
})