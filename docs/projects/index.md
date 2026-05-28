# 项目经历

## 仿网易云音乐平台

基于 Spring Boot 构建的在线音乐平台，集成 MySQL + Redis + MongoDB + RabbitMQ 多数据源。

**在线体验：[music.jingrc666.com](https://music.jingrc666.com)**

### 技术栈
- **后端**: Spring Boot 2.6, MyBatis, Spring Security, JWT
- **数据库**: MySQL, Redis, MongoDB
- **消息队列**: RabbitMQ
- **分布式**: Redisson 分布式锁
- **AI**: RAG 检索增强生成, ReAct Agent
- **部署**: Docker Compose, Nginx

### 核心功能
- Redisson 分布式锁 AOP 框架，解决高并发竞态问题
- RabbitMQ 消息队列异步解耦，批量接口从同步阻塞 → 异步毫秒级
- Spring Security + JWT 双通道认证体系
- AI Agent 智能音乐助手：自然语言搜歌、深度乐评、智能歌单策展
- Redis ZSET 实时排行榜系统
- Docker Compose 全栈编排 + Prometheus 监控

---

## MindEcho 智能音频录制与分析系统

独立开发的 Python 实时音频处理桌面应用（100K+ 行代码）。

### 技术栈
- **语言**: Python, numpy/scipy, PyTorch
- **GUI**: PyQt6/PyQt5, PyQtGraph
- **音频**: WASAPI 低延迟采集, Spleeter/Demucs 人声分离
- **AI**: SqueezeNet 微调演唱技巧识别, LLM + RAG + Tool Use

### 核心功能
- 三引擎音高检测（YIN / 自相关 / FFT），覆盖 A0-C8 全音域
- 轻量级演唱技巧识别模型（SqueezeNet, 87.5% 准确率）
- 双引擎五线谱实时可视化（OpenGL + Matplotlib）
- AI 声乐教练 Agent：多后端 LLM + RAG + 长期记忆管理

---

## Resume Builder

Vue 3 + Pinia 简历构建器，支持 PDF/Word 导出，5套完整设计预设。

**源码：[github.com/ckjbug](https://github.com/ckjbug)**
