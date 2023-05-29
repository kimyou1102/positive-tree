import React, { useEffect, useState } from 'react';
import { ListTemplate } from '@templates';
import { ListType } from 'src/models/posts';
import { getPosts } from '../../apis/post/get-posts-api';

export function ProductListPage() {
  const [posts, setPosts] = useState<ListType[]>([]);
  const title = '기자단 캠페인';

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
