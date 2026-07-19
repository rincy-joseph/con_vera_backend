const { createDiscussion } = require('./messageController')
const messageService = require('./messageService')
test("Should executed query on valid failed", async () => {
    const sampleData = {
        titleId: 567546,
        createdBy: 'ad16b979-66e7-4ce5-be8e-a377d960a1c9',
        title: 'New Feature Request',
        description: 'Please add Jest testing support.',
        tags: ['Showcase', 'Career']
    }
    const req = {
        body: sampleData
    }
    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    }
    const mockResponse = {
        success: true,
        data: [{
            "id": 588668
        }]
    }
    messageService.createDiscussion = jest.fn().mockResolvedValue(mockResponse)
    await createDiscussion(req, res);

    expect(messageService.createDiscussion).toHaveBeenCalledWith(sampleData);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockResponse);
});
test('tag max count should 3', async () => {
    const sampleDataInvalid = {
        titleId: 567546,
        tags: ['Showcase', 'Career', 'jidjwidjw', 'juhy']
    }
    const req = {
        body: sampleDataInvalid
    }
    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    }
    messageService.createDiscussion = jest.fn()
    await createDiscussion(req, res)
    expect(res.status).toHaveBeenCalledWith(400)
    expect(messageService.createDiscussion).not.toHaveBeenCalled()

})