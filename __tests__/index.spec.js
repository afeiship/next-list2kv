(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.list2kv', function () {
      const list1 = ['a', 'b', 'c'];
      const res1 = nx.list2kv(list1);
      const res2 = nx.list2kv(list1, { indexable: true });
      const res3 = nx.list2kv(list1, { label: 'title', id: 'value' });

      expect(res1).toEqual([
        { label: 'a', value: 'a' },
        { label: 'b', value: 'b' },
        { label: 'c', value: 'c' }
      ]);

      expect(res2).toEqual([
        { label: 'a', value: 0 },
        { label: 'b', value: 1 },
        { label: 'c', value: 2 }
      ]);

      expect(res3).toEqual([
        { title: 'a', value: 'a' },
        { title: 'b', value: 'b' },
        { title: 'c', value: 'c' }
      ]);
    });
  });
})();
