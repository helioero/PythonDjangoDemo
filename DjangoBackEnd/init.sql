-- 初始化表

-- 项目列表-项目基础信息表
CREATE TABLE project_list (
    id INT PRIMARY KEY AUTO_INCREMENT COMMENT '主键ID',

    img VARCHAR(255) NOT NULL COMMENT '项目图片路径',
    title VARCHAR(100) NOT NULL COMMENT '项目标题（如定制衣柜）',
    address VARCHAR(255) NOT NULL COMMENT '施工地址',
    projectCode VARCHAR(50) NOT NULL COMMENT '项目编号',

    maxArea DECIMAL(10,2) NOT NULL COMMENT '总施工面积（㎡）',
    completedArea DECIMAL(10,2) NOT NULL COMMENT '已完成面积（㎡）',
    workDays INT NOT NULL COMMENT '预计施工天数',
    endDate DATE NOT NULL COMMENT '交付日期',

    -- 索引设置
    INDEX idx_projectCode (projectCode),     -- 常用搜索：根据项目编号查询
    INDEX idx_address (address),             -- 地址模糊查询优化
    INDEX idx_endDate (endDate)              -- 时间排序或筛选优化
) COMMENT='项目基础信息表';

-- 分项描述表-项目分项施工描述表
CREATE TABLE project_desc (
    id INT PRIMARY KEY AUTO_INCREMENT COMMENT '主键ID',

    projectId INT NOT NULL COMMENT '关联 projectList 表的项目ID',
    desc_text VARCHAR(255) NOT NULL COMMENT '施工描述内容',
    materialsAreReady TINYINT(1) NOT NULL DEFAULT 0 COMMENT '材料是否到场：1到场，0未到场',
    area DECIMAL(10,2) NOT NULL COMMENT '该分项的施工面积（㎡）',
    workDay INT NOT NULL COMMENT '该分项预计施工天数',

    -- 外键约束
    CONSTRAINT fk_project_desc
        FOREIGN KEY (projectId)
        REFERENCES projectList(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    -- 索引
    INDEX idx_projectId (projectId)
) COMMENT='项目分项施工描述表';

