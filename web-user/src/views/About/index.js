import React, { useEffect, useState } from 'react';
import { API } from 'utils/api';
import { showError } from 'utils/common';
import { marked } from 'marked';
import { Box, Container, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

const About = () => {
  const [about, setAbout] = useState('');
  const [aboutLoaded, setAboutLoaded] = useState(false);

  const displayAbout = async () => {
    setAbout(localStorage.getItem('about') || '');
    const res = await API.get('/api/about');
    const { success, message, data } = res.data;
    if (success) {
      let aboutContent = data;
      if (!data.startsWith('https://')) {
        aboutContent = marked.parse(data);
      }
      setAbout(aboutContent);
      localStorage.setItem('about', aboutContent);
    } else {
      showError(message);
      setAbout('加载关于内容失败...');
    }
    setAboutLoaded(true);
  };

  useEffect(() => {
    displayAbout().then();
  }, []);

  return (
    <>
      {aboutLoaded && about === '' ? (
        <>
          <Box>
            <Container sx={{ paddingTop: '40px' }}>
              <MainCard title="关于">
                <Typography variant="body2">
                  New API 接口聚合管理平台，仅作为内部使用。
                </Typography>
                <Typography variant="body2">
                  友情链接：
                </Typography>
                <Typography variant="body2" component="div">
                  <a href='https://chat.aabao.vip'>FastGPT</a>：三分钟搭建 AI 知识库，专属自己的知识库问答系统
                </Typography>
                <Typography variant="body2" component="div">
                  <a href='https://web.aabao.vip'>ChatGPT Web</a>： 公益 ChatGPT 网页服务，支持 GPT4、GPTs、Mj绘画等多种AI模型
                </Typography>
                <Typography variant="body2">
                  New API © 2024 | 基于 One API v0.5.4 © 2024
                </Typography>
                <Typography variant="body2">
                  如有任何问题，请联系管理员微信号：【aabao325】
                </Typography>
              </MainCard>
            </Container>
          </Box>
        </>
      ) : (
        <>
          <Box>
            {about.startsWith('https://') ? (
              <iframe title="about" src={about} style={{ width: '100%', height: '100vh', border: 'none' }} />
            ) : (
              <>
                <Container>
                  <div style={{ fontSize: 'larger' }} dangerouslySetInnerHTML={{ __html: about }}></div>
                </Container>
              </>
            )}
          </Box>
        </>
      )}
    </>
  );
};

export default About;
