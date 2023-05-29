import React, { useEffect, useState } from 'react';
import { ListTemplate } from '@templates';
import { ListType } from 'src/models/posts';
import { getPosts } from '../../apis/post/get-posts-api';

export function RestaurantListPage() {
  const [posts, setPosts] = useState<ListType[]>([]);
  const title = '지역선택 > 전체';

  const api = async () => {
    await getPosts().then((res) => {
      setPosts(res.list);
    });
  };

  useEffect(() => {
    api();
  }, []);

  return <ListTemplate title={title} datas={posts} />;
}
