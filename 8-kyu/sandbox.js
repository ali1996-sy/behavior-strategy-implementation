function potatoes(p0, w0, p1) {
    return parseInt( (((100-p0)*w0)/(100-p1)),10)
}

Test.describe("Basic tests",function() {
    Test.it("potatoes",function() {
        Test.assertEquals(potatoes(82, 127, 80), 114);
        Test.assertEquals(potatoes(93, 129, 91), 100);
        
})})